using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Config;
using SuperApi.Dto.Auth;
using SuperApi.Enum;
using SuperApi.Model;
using SuperApi.SqlSugar;
using SuperApi.Utils;

namespace SuperApi.Service;

/// <summary>
/// 账号授权服务
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class AuthService : IDynamicWebApi
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly Repository<User> _db;

    /// <summary>
    /// 账号授权服务
    /// </summary>
    /// <param name="db"></param>
    /// <param name="httpContextAccessor"></param>
    public AuthService(Repository<User> db, IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
        _db = db;
    }

    /// <summary>
    /// 密码登录
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpPost]
    public async Task<LoginOutput> PwdLogin([Required] LoginInput input)
    {
        var user = await _db.AsQueryable().Where(x => x.Account.Equals(input.Account)).FirstAsync();
        _ = user ?? throw new Exception("账号不存在！");
        // 账号是否被冻结
        if (user.Status == StatusEnum.停用)
            throw new Exception("账号已冻结！");
        // 国密SM2解密（前端密码传输SM2加密后的）
        input.Password = CryptogramUtil.Sm2Decrypt(input.Password);
        var cryptoType = ConfigProvider.Config["Cryptogram:CryptoType"]!;
        // 密码是否正确
        if (cryptoType == CryptogramEnum.MD5.ToString())
        {
            if (!user.Password.Equals(CryptogramUtil.Md5Encrypt(input.Password)))
                throw new Exception("密码不正确！");
        }
        else
        {
            if (!CryptogramUtil.Decrypt(user.Password).Equals(input.Password))
                throw new Exception("密码不正确！");
        }

        var accessToken = JwtManageUtil.CreateToken(user.Id);
        return new LoginOutput
        {
            AccessToken = accessToken,
            //暂时没做无感刷新后续可以加入
            RefreshToken = accessToken
        };
    }

    /// <summary>
    /// 获取用户信息
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<UserInfoOutPut> UserInfo()
    {
        var accessToken = JWTEncryptionUtil.GetJwtBearerToken(_httpContextAccessor.HttpContext!);
        if (string.IsNullOrWhiteSpace(accessToken))
        {
            throw new Exception("AccessToken不存在！");
        }

        var result = JwtManageUtil.DecodeJwt(accessToken);
        if (result.Count <= 0 && !string.IsNullOrWhiteSpace(result["UserId"]))
        {
            throw new Exception("AccessToken校验失败！");
        }

        var userId = Convert.ToInt64(result["UserId"]);
        var userInfo = await _db.AsQueryable().Where(x => x.Id == userId).FirstAsync();
        return new UserInfoOutPut
        {
            UserId = userInfo.Id,
            Account = userInfo.Account,
            Roles = new List<string>(),
            Buttons = new List<string>()
        };
    }

    /// <summary>
    /// 退出登录
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<bool> LoginOut()
    {
        var accessToken = JWTEncryptionUtil.GetJwtBearerToken(_httpContextAccessor.HttpContext!);
        if (string.IsNullOrWhiteSpace(accessToken))
        {
            throw new Exception("Token不存在！");
        }

        return true;
    }
}