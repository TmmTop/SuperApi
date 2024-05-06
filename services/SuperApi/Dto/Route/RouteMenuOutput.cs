namespace SuperApi.Dto.Route;
/// <summary>
/// 前端路由输出
/// </summary>
public class RouteMenuOutput
{
    /// <summary>
    /// 主路由名称
    /// </summary>
    /// <example>home</example>
    public string Home { get; set; }= "home";
    /// <summary>
    /// 
    /// </summary>
    public List<Route> Routes { get; set; }= new List<Route>();
}