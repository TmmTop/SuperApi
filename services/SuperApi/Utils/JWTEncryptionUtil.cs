using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace SuperApi.Utils;


//
// 摘要:
//     JWT 加解密
public class JWTEncryptionUtil
{
    //
    // 摘要:
    //     刷新 Token 身份标识
    private static readonly string[] _refreshTokenClaims = new string[5] { "f", "e", "s", "l", "k" };

    //
    // 摘要:
    //     日期类型的 Claim 类型
    private static readonly string[] DateTypeClaimTypes = new string[3] { "iat", "nbf", "exp" };

    //
    // 摘要:
    //     框架 App 静态类
    internal static Type FrameworkApp { get; set; }


    //
    // 摘要:
    //     生成 Token
    //
    // 参数:
    //   issuerSigningKey:
    //
    //   payload:
    //
    //   algorithm:
    public static string Encrypt(string issuerSigningKey, IDictionary<string, object> payload, string algorithm = "HS256")
    {
        string payload2 = ((payload is JwtPayload jwtPayload) ? jwtPayload.SerializeToJson() : JsonSerializer.Serialize(payload, new JsonSerializerOptions
        {
            Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
        }));
        return Encrypt(issuerSigningKey, payload2, algorithm);
    }

    //
    // 摘要:
    //     生成 Token
    //
    // 参数:
    //   issuerSigningKey:
    //
    //   payload:
    //
    //   algorithm:
    public static string Encrypt(string issuerSigningKey, string payload, string algorithm = "HS256")
    {
        SigningCredentials signingCredentials = null;
        if (!string.IsNullOrWhiteSpace(issuerSigningKey))
        {
            signingCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(issuerSigningKey)), algorithm);
        }

        JsonWebTokenHandler jsonWebTokenHandler = new JsonWebTokenHandler();
        if (signingCredentials != null)
        {
            return jsonWebTokenHandler.CreateToken(payload, signingCredentials);
        }

        return jsonWebTokenHandler.CreateToken(payload);
    }



    //
    // 摘要:
    //     读取 Token，不含验证
    //
    // 参数:
    //   accessToken:
    public static JsonWebToken ReadJwtToken(string accessToken)
    {
        JsonWebTokenHandler jsonWebTokenHandler = new JsonWebTokenHandler();
        if (jsonWebTokenHandler.CanReadToken(accessToken))
        {
            return jsonWebTokenHandler.ReadJsonWebToken(accessToken);
        }

        return null;
    }

    


    //
    // 摘要:
    //     获取 JWT Bearer Token
    //
    // 参数:
    //   httpContext:
    //
    //   headerKey:
    //
    //   tokenPrefix:
    public static string GetJwtBearerToken(HttpContext httpContext, string headerKey = "Authorization", string tokenPrefix = "Bearer ")
    {
        string text = httpContext.Request.Headers[headerKey].ToString();
        if (string.IsNullOrWhiteSpace(text))
        {
            return null;
        }

        int length = tokenPrefix.Length;
        if (!text.StartsWith(tokenPrefix, ignoreCase: true, null) || text.Length <= length)
        {
            return null;
        }

        string text2 = text;
        int num = length;
        return text2.Substring(num, text2.Length - num);
    }

}