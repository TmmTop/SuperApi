using SuperApi.Core.Provider;

namespace SuperApi.Core.Handle;

/// <summary>
/// 全局异常中间件
/// </summary>
public class GlobalResponseHandle
{
    private readonly RequestDelegate _next;
    /// <summary>
    /// 注入下一个中间件
    /// </summary>
    /// <param name="next"></param>
    public GlobalResponseHandle(RequestDelegate next)
    {
        _next = next;
    }

    /// <summary>
    /// 执行
    /// </summary>
    /// <param name="httpContext"></param>
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        } 
        // 异常时统一处理
        catch (Exception ex)
        {
            if (!httpContext.Response.HasStarted)
            {
                var problem = new RDto
                {
                    Code = HttpStatusCode.InternalServerError,
                    Msg = ex.Message,
                    Data = ResponseMsgOption.ServerError
                };
                if (!string.IsNullOrWhiteSpace(ex.StackTrace))
                {
                    // 自定义正则：匹配 at [方法名] in [文件路径]:line [行号]
                    var matches = Regex.Matches(ex.StackTrace, "at[ ](.+?)[ ]in[ ](.+?)[:]line[ ]([0-9]+)");
                    // 使用Linq的拓展方法，筛选出需要的数据
                    // 过滤掉：
                    //      1. 包含了当前中间件名字的错误信息
                    var filterMatches = matches.Where(t =>
                        !t.Groups[0].ToString().Contains("Handle.GlobalExceptionMiddleware"));
                    var extendExObject = filterMatches.Select(x => new
                    {
                        method = x.Groups[1].ToString(),
                        file = x.Groups[2].ToString(),
                        line = x.Groups[3].ToString()
                    });
                    Console.WriteLine(JsonConvert.SerializeObject(extendExObject));
                }

                await httpContext.Response.WriteAsJsonAsync(problem);
            }
        }
    }
}

/// <summary>
/// 拓展方法
/// </summary>
public static class MyGlobalExceptionMiddlewareExtensions
{
    /// <summary>
    /// 全局异常处理
    /// </summary>
    /// <param name="app"></param>
    /// <returns></returns>
    public static IApplicationBuilder UseGlobalExceptionHandle(this IApplicationBuilder app)
    {
        return app.UseMiddleware<GlobalResponseHandle>();
    }
}