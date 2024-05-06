using System.ComponentModel.DataAnnotations;

namespace SuperApi.Dto.Route;

public class RouteMenuInput
{
    /// <summary>
    /// 主路由名称
    /// </summary>
    /// <example>admin</example>
    [Required(ErrorMessage = "主路由名称不能为空"), MinLength(2, ErrorMessage = "账号不能少于2个字符")]
    public string Home { get; set; }= "home";
}