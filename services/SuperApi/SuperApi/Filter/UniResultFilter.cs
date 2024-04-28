using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace TimServe.Core;

/// <summary>
/// 统一返回过滤器
/// </summary>
public class UniResultFilter : ActionFilterAttribute
{
    /// <summary>
    /// 返回值执行时触发
    /// </summary>
    /// <param name="context"></param>
    public override void OnResultExecuting(ResultExecutingContext context)
    {
        if (context.Result is ObjectResult objRst)
        {
            var result = new UniResult
            {
                Code = StatusCodes.Status200OK,
                Type = "success",
                Message = "操作成功！",
                Result = objRst.Value,
                Extras = null,
                Time = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
            };
            if (objRst.Value!.GetType().Equals(typeof(bool))&&!(bool)objRst.Value)
            {
                result = new UniResult
                {
                    Code = StatusCodes.Status400BadRequest,
                    Type = "fail",
                    Message = "操作失败！",
                    Result = objRst.Value,
                };
            }
            context.Result = new ObjectResult(result);
        }
    }
}