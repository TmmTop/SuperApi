using System.Diagnostics;
using System.Reflection;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using NLog;
using SuperApi.Utils;

namespace SuperApi.Filter;


/// <summary>
/// 日志过滤器
/// </summary>
public class LoggerFilter : Attribute, IAsyncActionFilter
{
    private readonly Logger _logger = LogManager.GetCurrentClassLogger();
    /// <summary>
    /// 请求时触发
    /// </summary>
    /// <param name="context"></param>
    /// <param name="next"></param>
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        // 获取 HttpContext 和 HttpRequest 对象
        var httpContext = context.HttpContext;
        var httpRequest = httpContext.Request;
        var resultContext = await next();
        // 获取控制器/操作描述器
        var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;
        // 调用呈现链名称
        var displayName = controllerActionDescriptor!.DisplayName;
        // 获取请求方法
        var actionMethod = controllerActionDescriptor.MethodInfo;
        // 获取路由表信息
        var routeData = context.RouteData;
        var controllerName = routeData.Values["controller"];
        var actionName = routeData.Values["action"];
        var areaName = routeData.DataTokens["area"];
        // 获取服务端 IPv4 地址
        var localIPv4 = httpContext.Connection.LocalIpAddress?.MapToIPv4()?.ToString();
        // 获取客户端 IPv4 地址
        var remoteIPv4 = httpContext.Connection.RemoteIpAddress?.MapToIPv4()?.ToString();
        // 获取请求方式
        var httpMethod = httpContext.Request.Method;
        // 获取请求的 Url 地址
        var requestUrl = Uri.UnescapeDataString(new StringBuilder()
            .Append(httpRequest.Scheme)
            .Append("://")
            .Append(httpRequest.Host)
            .Append(httpRequest.PathBase)
            .Append(httpRequest.Path)
            .Append(httpRequest.QueryString)
            .ToString());
        // 获取来源 Url 地址
        var refererUrl = Uri.UnescapeDataString(httpRequest.Headers["Referer"].ToString());
        // 服务器环境
        var environmentName = httpContext.RequestServices.GetRequiredService<IWebHostEnvironment>().EnvironmentName;
        // 客户端浏览器信息
        var userAgent = httpRequest.Headers["User-Agent"];
        // token 信息
        var authorization = httpRequest.Headers["Authorization"].ToString();
        // 计算接口执行时间
        var timeOperation = Stopwatch.StartNew();
        timeOperation.Stop();
        var monitorItems = new List<string>()
        {
            $"##版权所有## SuperEngine By 1844045442 甜蜜蜜",
            $"##控制器名称## {controllerActionDescriptor.ControllerTypeInfo.Name}",
            $"##操作名称## {actionMethod.Name}",
            $"##路由信息## [area]: {areaName}; [controller]: {controllerName}; [action]: {actionName}",
            $"##请求方式## {httpMethod}", $"##请求地址## {requestUrl}", $"##来源地址## {refererUrl}", $"##浏览器标识## {userAgent}",
            $"##客户端 IP 地址## {remoteIPv4}", $"##服务端 IP 地址## {localIPv4}", $"##服务端运行环境## {environmentName}",
            $"##执行耗时## {timeOperation.ElapsedMilliseconds}ms"
        };
        // 添加 JWT 授权信息日志模板
        monitorItems.AddRange(new[]
        {
            $"━━━━━━━━━━━━━━━  授权信息 ━━━━━━━━━━━━━━━", $"##JWT Token## {authorization}", $""
        });
        // 添加请求参数信息日志模板
        var parameterValues = context.ActionArguments;
        monitorItems.AddRange(GenerateParameterTemplate(parameterValues, actionMethod,
            httpRequest.Headers["Content-Type"]));
        // 添加返回值信息日志模板
        monitorItems.AddRange(GenerateReturnInfomationTemplate(resultContext, actionMethod));
        var monitor = LoggerUtil.Wrapper("Logging Monitor", displayName!, monitorItems.ToArray());
        _logger.Debug(monitor);
    }

    /// <summary>
    /// 生成 JWT 授权信息日志模板
    /// </summary>
    /// <param name="claimsPrincipal"></param>
    /// <param name="authorization"></param>
    /// <returns></returns>
    private List<string> GenerateAuthorizationTemplate(ClaimsPrincipal claimsPrincipal, StringValues authorization)
    {
        var templates = new List<string>();

        if (!claimsPrincipal.Claims.Any()) return templates;

        templates.AddRange(new[]
        {
            $"━━━━━━━━━━━━━━━  授权信息 ━━━━━━━━━━━━━━━", $"##JWT Token## {authorization}", $""
        });

        // 遍历身份信息
        foreach (var claim in claimsPrincipal.Claims)
        {
            templates.Add(
                $"##{claim.Type} ({(claim.ValueType.Replace("http://www.w3.org/2001/XMLSchema#", ""))})## {claim.Value}");
        }

        return templates;
    }

    /// <summary>
    /// 生成请求参数信息日志模板
    /// </summary>
    /// <param name="parameterValues"></param>
    /// <param name="method"></param>
    /// <param name="contentType"></param>
    /// <returns></returns>
    private List<string> GenerateParameterTemplate(IDictionary<string, object?> parameterValues, MethodInfo method,
        StringValues contentType)
    {
        var templates = new List<string>();

        if (parameterValues.Count == 0) return templates;

        templates.AddRange(new[]
        {
            $"━━━━━━━━━━━━━━━  参数列表 ━━━━━━━━━━━━━━━", $"##Content-Type## {contentType}", $""
        });

        var parameters = method.GetParameters();
        foreach (var parameter in parameters)
        {
            var name = parameter.Name;
            _ = parameterValues.TryGetValue(name, out var value);
            var parameterType = parameter.ParameterType;

            object rawValue = default;
            // 文件类型参数
            if (value is IFormFile || value is List<IFormFile>)
            {
                // 单文件
                if (value is IFormFile formFile)
                {
                    var fileSize = Math.Round(formFile.Length / 1024D);
                    templates.Add(
                        $"##{name} ({parameterType.Name})## [name]: {formFile.FileName}; [size]: {fileSize}KB; [content-type]: {formFile.ContentType}");
                    continue;
                }
                // 多文件
                else if (value is List<IFormFile> formFiles)
                {
                    for (var i = 0; i < formFiles.Count; i++)
                    {
                        var file = formFiles[i];
                        var size = Math.Round(file.Length / 1024D);
                        templates.Add(
                            $"##{name}[{i}] ({nameof(IFormFile)})## [name]: {file.FileName}; [size]: {size}KB; [content-type]: {file.ContentType}");
                    }

                    continue;
                }
            }
            // 处理 byte[] 参数类型
            else if (value is byte[] byteArray)
            {
                templates.Add($"##{name} ({parameterType.Name})## [Length]: {byteArray.Length}");
                continue;
            }
            // 处理基元类型，字符串类型和空值
            else if (parameterType.IsPrimitive || value is string || value == null) rawValue = value;
            // 其他类型统一进行序列化
            else
            {
                rawValue = JsonConvert.SerializeObject(value);
            }

            templates.Add($"##{name} ({parameterType.Name})## {rawValue}");
        }

        return templates;
    }

    /// <summary>
    /// 生成返回值信息日志模板
    /// </summary>
    /// <param name="resultContext"></param>
    /// <param name="method"></param>
    /// <returns></returns>
    private List<string> GenerateReturnInfomationTemplate(ActionExecutedContext resultContext, MethodInfo method)
    {
        var templates = new List<string>();
        var result = resultContext.Result! as ObjectResult;
        if (result != null)
        {
            // 获取最终呈现值（字符串类型）
            var displayValue = method.ReturnType == typeof(void)
                ? string.Empty
                : JsonConvert.SerializeObject(result!.Value);
            templates.AddRange(new[]
            {
                $"━━━━━━━━━━━━━━━  返回信息 ━━━━━━━━━━━━━━━", $"##原始类型## {method.ReturnType.FullName}",
                $"##最终类型## {resultContext.GetType().FullName}", $"##最终返回值## {displayValue}"
            });
        }
        return templates;
    }
}