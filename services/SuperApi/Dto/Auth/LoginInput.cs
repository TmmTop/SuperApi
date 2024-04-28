
using System.ComponentModel.DataAnnotations;

namespace SuperApi.Dto.Auth;

/// <summary>
/// 用户登录参数
/// </summary>
public class LoginInput
{
    /// <summary>
    /// 账号
    /// </summary>
    /// <example>admin</example>
    [Required(ErrorMessage = "账号不能为空"), MinLength(2, ErrorMessage = "账号不能少于2个字符")]
    public string Account { get; set; }= "";

    /// <summary>
    /// 加密密码
    /// </summary>
    /// <example>123456</example>
    [Required(ErrorMessage = "密码不能为空"), MinLength(16, ErrorMessage = "密码不能少于16个字符")]
    public string Password { get; set; } = "";

    /// <summary>
    /// 验证码Id
    /// </summary>
    public long CodeId { get; set; }

    /// <summary>
    /// 验证码
    /// </summary>
    public string Code { get; set; }= "";
}