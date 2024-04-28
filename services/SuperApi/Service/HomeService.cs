using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;

namespace SuperApi.Service;

/// <summary>
/// 首页服务
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class HomeService : IDynamicWebApi
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    /// <summary>
    /// 首页服务API服务实例
    /// </summary>
    /// <param name="httpContextAccessor"></param>
    public HomeService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    /// <summary>
    /// 加载静态文件并返回html首页
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpGet]
    [Route("/admin")]
    public async Task Index()
    {
        var file =await File.ReadAllTextAsync(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wwwroot/admin/index.html"));
        var data = Encoding.UTF8.GetBytes(file);
        _httpContextAccessor.HttpContext!.Response.ContentType = "text/html";
        await _httpContextAccessor.HttpContext!.Response.Body.WriteAsync(data, 0, data.Length);
    }
}