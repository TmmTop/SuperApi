using SuperApi.Core.Provider;

namespace SuperApi.Core.Service;

/// <summary>
/// Auth模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class AuthAppService : IDynamicWebApi
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly Repository<Tenant> _db;
    private readonly IConfiguration _config;
    private readonly TokenValidationParameters _parameters;
    private readonly CacheProvider _cache;

    /// <summary>
    /// 授权模块API服务实例
    /// </summary>
    /// <param name="db"></param>
    /// <param name="httpContextAccessor"></param>
    /// <param name="config"></param>
    /// <param name="cache"></param>
    public AuthAppService(Repository<Tenant> db, IHttpContextAccessor httpContextAccessor, IConfiguration config,
        CacheProvider cache)
    {
        _db = db;
        _httpContextAccessor = httpContextAccessor;
        _config = config;
        _cache = cache;
        _parameters = new TokenValidationParameters
        {
            ValidateIssuer = Boolean.Parse(_config.GetSection("JWTSettings:ValidateIssuer").Value!), //是否在令牌期间验证签发者
            ValidateAudience = Boolean.Parse(_config.GetSection("JWTSettings:ValidateAudience").Value!), //是否验证接收者
            ValidateLifetime = Boolean.Parse(_config.GetSection("JWTSettings:ValidateLifetime").Value!), //是否验证失效时间
            ValidateIssuerSigningKey =
                Boolean.Parse(_config.GetSection("JWTSettings:ValidateIssuerSigningKey").Value!), //是否验证签名
            ValidIssuer = _config.GetSection("JWTSettings:ValidIssuer").Value, //签发者, 签发token的人
            ValidAudience = _config.GetSection("JWTSettings:ValidAudience").Value, //接收者
            IssuerSigningKey =
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(_config.GetSection("JWTSettings:IssuerSigningKey").Value!)) //密钥
        };
    }

    /// <summary>
    /// 获取租户信息
    /// </summary> 
    /// <returns></returns>
    [AllowAnonymous]
    [HttpPost]
    public async Task<JsonResult> Login([Required] LoginInput input)
    {
        var tenant = await _db.AsQueryable().Where(x => x.Account.Equals(input.Account)).FirstAsync();
        _ = tenant ?? throw new Exception("账号不存在！");
        // 账号付费是否到期
        if (tenant.IsExpire == StatusEnum.Enable)
            throw new Exception("付费已过期，请重新订阅！");
        // 账号是否被冻结
        if (tenant.Status == StatusEnum.Disable)
            throw new Exception("账号已冻结！");
        // 国密SM2解密（前端密码传输SM2加密后的）
        input.Password = CryptogramUtil.SM2Decrypt(input.Password);
        var cryptoType = _config.GetSection("Cryptogram:CryptoType").Value!;
        // 密码是否正确
        if (cryptoType == CryptogramEnum.MD5.ToString())
        {
            if (!tenant.Password.Equals(CryptogramUtil.Md5Encrypt(input.Password)))
                throw new Exception("密码不正确！");
        }
        else
        {
            if (!CryptogramUtil.Decrypt(tenant.Password).Equals(input.Password))
                throw new Exception("密码不正确！");
        }

        var accessToken = CreateToken(tenant.Id);
        var refreshToken = CreateToken(tenant.Id, true);
        //将登录的tenantId缓存起来，以供其他模块调用
        await _cache.SetAway("tenantId", tenant.Id);
        return RDto.R(HttpStatusCode.OK, new LoginOutput
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken
        });
    }

    
    /// <summary>
    /// 根据token获取用户信息
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetUserInfo()
    {
        var authorization = _httpContextAccessor.HttpContext!.Request.Headers["Authorization"];
        if (authorization.IsNullOrEmpty())
        {
            throw new Exception("请在请求头加入Authorization！");
        }

        if (string.IsNullOrWhiteSpace(authorization.First()))
        {
            throw new Exception("请在请求头加入Authorization！");
        }

        if (string.IsNullOrWhiteSpace(authorization))
        {
            throw new Exception("Token值无效！");
        }

        var token = authorization.First()!.Split("Bearer ");
        if (token.Length < 1)
        {
            throw new Exception("Token值不符合规范！");
        }

        var result = DecodeJwt(token[1]);
        if (result.Count <= 0 && !string.IsNullOrWhiteSpace(result["tenantId"]))
        {
            throw new Exception("Token解密失败！");
        }

        var tenantId = Convert.ToInt64(result["tenantId"]);
        var userInfo = await _db.AsQueryable().Where(x => x.Id == tenantId).FirstAsync();
        return RDto.R(HttpStatusCode.OK, userInfo);
    }

    /// <summary>
    /// 根据tenantId生成RefreshToken
    /// token的过期时间是JWTSettings:ExpiredTime秒
    /// refreshToken过期时间应该设置久一点
    /// </summary>
    /// <param name="tenantId"></param>
    /// <param name="isRefresh"></param>
    /// <returns></returns>
    private string CreateToken(long? tenantId, bool isRefresh = false)
    {
        var claims = new[]
        {
            new Claim("tenantId", tenantId.ToString())
        };
        var secretKey =
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("JWTSettings:IssuerSigningKey").Value!));
        //选择加密算法
        var algorithm = SecurityAlgorithms.HmacSha256;
        //生成Credentials
        var signingCredentials = new SigningCredentials(secretKey, algorithm);
        //生成token
        var jwtSecurityToken = new JwtSecurityToken(
            //Claims,
            claims: claims,
            audience: _parameters.ValidAudience,
            issuer: _parameters.ValidIssuer,
            //notBefore
            notBefore: DateTime.Now,
            //expires
            expires: isRefresh
                ? DateTime.Now.AddSeconds(long.Parse(_config.GetSection("JWTSettings:RefreshExpiredTime").Value!))
                : DateTime.Now.AddSeconds(long.Parse(_config.GetSection("JWTSettings:ExpiredTime").Value!)),
            //Credentials
            signingCredentials: signingCredentials
        );
        var refreshToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        return refreshToken;
    }

    /// <summary>
    /// 对jwt字符串 解码
    /// </summary> 
    private Dictionary<string, string> DecodeJwt(string accessToken)
    {
        Dictionary<string, string> dic = new Dictionary<string, string>();
        var jwtHandler = new JwtSecurityTokenHandler();
        // token校验
        if (!string.IsNullOrEmpty(accessToken) && jwtHandler.CanReadToken(accessToken))
        {
            JwtSecurityToken jwtToken = jwtHandler.ReadJwtToken(accessToken);
            var claims = jwtToken.Claims;
            foreach (var claim in claims)
            {
                dic.Add(claim.Type, claim.Value);
            }
        }

        return dic;
    }
    
    /// <summary>
    /// 商业版实现
    /// 根据token判断如果只是accesstoken过期则刷新，2个都过期则重新登录
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    private JsonResult RefreshToken()
    {
        var refreshToken = _httpContextAccessor.HttpContext!.Request.Headers["RefreshToken"].First();
        var jwtHandler = new JwtSecurityTokenHandler();
        if (string.IsNullOrWhiteSpace(refreshToken))
        {
            throw new Exception("RefreshToken值为空！");
        }

        var result = new Dictionary<string, string>();
        if (!jwtHandler.CanReadToken(refreshToken))
        {
            throw new Exception("RefreshToken无法识别！");
        }

        try
        {
            var accessToken = _httpContextAccessor.HttpContext!.Request.Headers["accessToken"].First()!;
            result = DecodeJwt(accessToken);
            if (result.Count <= 0 && !string.IsNullOrWhiteSpace(result["tenantId"]))
            {
                throw new Exception("Token解密失败！");
            }
        }
        catch (SecurityTokenExpiredException ex)
        {
            //如果refreshToken也过期了就直接抛401
            _httpContextAccessor.HttpContext.Response.StatusCode = StatusCodes.Status401Unauthorized;
        }

        return RDto.R(HttpStatusCode.OK, new { AccessToken = CreateToken(Convert.ToInt64(result["tenantId"])) });
    }
    /// <summary>
    ///  商业版实现 此版本暂时不提供
    /// 强制accesstoken和refreshtoken失效
    /// 将2个token值，key为前缀+tenantid存入缓存中，相当于黑名单
    /// jwt校验通过后查询一下缓存里是否有这2个token，有任意一个即无法登录
    /// </summary>
    /// <param name="headerToken"></param>
    /// <returns></returns>
    [HttpGet]
    private async Task<JsonResult> CancelToken()
    {
        var accessToken = _httpContextAccessor.HttpContext!.Request.Headers["AccessToken"].First()!;
        var refreshToken = _httpContextAccessor.HttpContext!.Request.Headers["RefreshToken"].First();
        var jwtHandler = new JwtSecurityTokenHandler();
        if (string.IsNullOrWhiteSpace(refreshToken))
        {
            throw new Exception("RefreshToken值为空！");
        }
        if (!jwtHandler.CanReadToken(refreshToken))
        {
            throw new Exception("RefreshToken无法识别！");
        }
        if (string.IsNullOrWhiteSpace(accessToken))
        {
            throw new Exception("AccessToken值为空！");
        }
        if (!jwtHandler.CanReadToken(accessToken))
        {
            throw new Exception("AccessToken无法识别！");
        }
        var result = DecodeJwt(accessToken);
        if (result.Count <= 0 && !string.IsNullOrWhiteSpace(result["tenantId"]))
        {
            throw new Exception("Token解密失败！");
        }
        //将办法的AccessToken缓存起来，缓存失效日期为jwt accessToken过期时间
        await _cache.Set(accessToken, accessToken,TimeSpan.FromSeconds(1));
        //将办法的RefreshToken缓存起来，缓存失效日期为jwt accessToken过期时间，登录时校验缓存是否有此缓存，
        await _cache.Set(accessToken, refreshToken,TimeSpan.FromSeconds(1));
        return RDto.R(HttpStatusCode.OK);
    }

}