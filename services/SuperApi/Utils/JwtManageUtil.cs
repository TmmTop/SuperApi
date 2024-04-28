using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using SuperApi.Config;
namespace SuperApi.Utils;

public class JwtManageUtil
{
    /// <summary>
    /// 生成Token令牌
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    public static string CreateToken(long userId)
    {
        var claims = new[]
        {
            new Claim("UserId", userId.ToString())
        };
        var secretKey =
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(ConfigProvider.Config["JWTSettings:IssuerSigningKey"]!));
        //选择加密算法
        var algorithm = SecurityAlgorithms.HmacSha256;
        //生成Credentials
        var signingCredentials = new SigningCredentials(secretKey, algorithm);
        //生成token
        var jwtSecurityToken = new JwtSecurityToken(
            claims: claims,
            audience: ConfigProvider.Config["JWTSettings:ValidAudience"],
            issuer: ConfigProvider.Config["JWTSettings:ValidIssuer"],
            notBefore: DateTime.Now,
            expires: DateTime.Now.AddSeconds(long.Parse(ConfigProvider.Config["JWTSettings:ExpiredTime"]!)),
            signingCredentials: signingCredentials
        );
        return new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
    }

    /// <summary>
    /// 生成RefreshToken令牌
    /// </summary>
    /// <returns></returns>
    public static string CreateRefreshToken()
    {
        var claims = new[]
        {
            new Claim("time", DateTime.UtcNow.Ticks.ToString())
        };
        var secretKey =
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(ConfigProvider.Config["JWTSettings:IssuerSigningKey"]!));
        //选择加密算法
        var algorithm = SecurityAlgorithms.HmacSha256;
        //生成Credentials
        var signingCredentials = new SigningCredentials(secretKey, algorithm);
        //生成token
        var jwtSecurityToken = new JwtSecurityToken(
            claims: claims,
            audience: ConfigProvider.Config["JWTSettings:ValidAudience"],
            issuer: ConfigProvider.Config["JWTSettings:ValidIssuer"],
            notBefore: DateTime.Now,
            expires: DateTime.Now.AddSeconds(long.Parse(ConfigProvider.Config["JWTSettings:RefreshExpiredTime"]!)),
            signingCredentials: signingCredentials
        );
        return new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
    }
    /// <summary>
    /// 对jwt字符串解析
    /// </summary> 
    public static Dictionary<string, string> DecodeJwt(string token)
    {
        Dictionary<string, string> dic = new Dictionary<string, string>();
        var jwtHandler = new JwtSecurityTokenHandler();
        if (!string.IsNullOrEmpty(token) && jwtHandler.CanReadToken(token))
        {
            JwtSecurityToken jwtToken = jwtHandler.ReadJwtToken(token);
            var claims = jwtToken.Claims;
            foreach (var claim in claims)
            {
                dic.Add(claim.Type, claim.Value);
            }
        }
        return dic;
    }

    /// <summary>
    /// 校验Token是否有效
    /// </summary>
    /// <param name="token"></param>
    /// <returns></returns>
    public static async Task<bool> ValidateTokenAsync(string token)
    {
        var jwtHandler = new JwtSecurityTokenHandler();
        var validate = await jwtHandler.ValidateTokenAsync(token, new TokenValidationParameters
        {
            ClockSkew = TimeSpan.FromSeconds(long.Parse(ConfigProvider.Config["JWTSettings:ClockSkew"]!)),
            ValidateIssuerSigningKey = true,
            ValidIssuer = ConfigProvider.Config["JWTSettings:ValidIssuer"],
            ValidAudience = ConfigProvider.Config["JWTSettings:ValidAudience"],
            IssuerSigningKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ConfigProvider.Config["JWTSettings:IssuerSigningKey"]!))
        });
        return validate.IsValid;
    }
}