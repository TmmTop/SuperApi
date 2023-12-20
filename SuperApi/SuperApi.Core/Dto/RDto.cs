namespace SuperApi.Core.Dto;
/// <summary>
/// 统一接口返回DTO
/// </summary>
public class RDto
{
    /// <summary>
    /// 
    /// </summary>
    private static RDto _r = new RDto();

    /// <summary>
    /// 统一接口返回结果实例
    /// </summary>
    public RDto()
    {
        _r = this;
    }

    /// <summary>
    /// 状态码
    /// </summary>
    public HttpStatusCode Code { get; set; }

    /// <summary>
    /// 状态信息
    /// </summary>
    public string? Msg { get; set; }

    /// <summary>
    /// 返回结果
    /// </summary>
    public object? Data { get; set; }

    /// <summary>
    /// 统一接口返回
    /// </summary>
    /// <param name="code"></param>
    /// <param name="msg"></param>
    /// <param name="data"></param>
    public static JsonResult R(HttpStatusCode code, string msg, object? data = null)
    {
        _r.Code = code;
        _r.Msg = msg;
        _r.Data = data;
        return new JsonResult(_r);
    }
}