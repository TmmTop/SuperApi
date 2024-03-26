namespace SuperApi.Core.Dto;

/// <summary>
/// 动态模块Dto
/// </summary>
public class DyDto
{
    /// <summary>
    /// 表ID
    /// </summary>
    [Required(ErrorMessage = "TableId不能为空")]
    public long TableId { get; set; } = 0;

    /// <summary>
    /// 参数
    /// </summary>
    [Required(ErrorMessage = "参数不能为空")]
    public Dictionary<string, string> Param { get; set; } = new Dictionary<string, string>();

    /// <summary>
    /// 页码
    /// </summary>
    public int PageNum { get; set; }

    /// <summary>
    /// 每页数量
    /// </summary>
    public int PageSize { get; set; }
}