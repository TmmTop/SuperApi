using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using NLog;
using SuperApi.Dto;
using SuperApi.Utils;

namespace SuperApi.Filter;

/// <summary>
/// 异常过滤器
/// </summary>
public class ExceptionFilter : ExceptionFilterAttribute
{
    private readonly Logger _logger = LogManager.GetCurrentClassLogger();

    /// <summary>
    /// 异常触发时执行
    /// </summary>
    /// <param name="context"></param>
    public override async Task OnExceptionAsync(ExceptionContext context)
    {
        context.ExceptionHandled = true;
        // 获取控制器/操作描述器
        var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;
        // 调用呈现链名称
        var displayName = controllerActionDescriptor!.DisplayName;
        var monitorItems = new List<string>();
        if (!string.IsNullOrWhiteSpace(context.Exception.StackTrace))
        {
            // 自定义正则：匹配 at [方法名] in [文件路径]:line [行号]
            var matches = Regex.Matches(context.Exception.StackTrace, "at[ ](.+?)[ ]in[ ](.+?)[:]line[ ]([0-9]+)");
            var extendExObject = matches.Select(x => new
            {
                method = x.Groups[2].ToString(),
                line = x.Groups[3].ToString()
            }).ToList();
            monitorItems.AddRange(new[]
            {
                $"━━━━━━━━━━━━━━━  异常信息 ━━━━━━━━━━━━━━━",
                $"##类型## {context.Exception.GetType().FullName}",
                $"##消息## {context.Exception.Message}",
                $"##错误堆栈## {JsonConvert.SerializeObject(extendExObject)}"
            });
            await context.HttpContext.Response.WriteAsJsonAsync(
                new UniResult
                {
                    Code = StatusCodes.Status500InternalServerError,
                    Type = "error",
                    Message = context.Exception.Message,
                    Extras = extendExObject,
                    Time = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
                });
        }
        else
        {
            monitorItems.AddRange(new[]
            {
                $"━━━━━━━━━━━━━━━  异常信息 ━━━━━━━━━━━━━━━",
                $"##类型## {context.Exception.GetType().FullName}",
                $"##消息## {context.Exception.Message}"
            });
            await context.HttpContext.Response.WriteAsJsonAsync(new UniResult
            {
                Code = StatusCodes.Status500InternalServerError,
                Type = "error",
                Message = context.Exception.Message,
                Time = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
            });
        }

        var monitor = LoggerUtil.Wrapper("Error Monitor", displayName!, monitorItems.ToArray());
        _logger.Error(monitor);
    }
}