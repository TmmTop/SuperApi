namespace SuperApi.Dto;
/// <summary>
/// 全局返回结果
/// </summary>
public class UniResult
{
    /// <summary>
    /// 状态码
    /// </summary>
    public int Code { get; set; }

    /// <summary>
    /// 类型success、warning、error
    /// </summary>
    public string? Type { get; set; }

    /// <summary>
    /// 错误信息
    /// </summary>
    public string? Message { get; set; }

    /// <summary>
    /// 数据
    /// </summary>
    public object? Result { get; set; }

    /// <summary>
    /// 附加数据
    /// </summary>
    public object? Extras { get; set; }

    /// <summary>
    /// 时间
    /// </summary>
    public string? Time { get; set; }
}