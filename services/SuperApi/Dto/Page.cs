namespace SuperApi.Dto;

/// <summary>
/// 统一分页返回数据格式
/// </summary>
public class Page
{
    /// <summary>
    /// 分页数据列表
    /// </summary>
    public object? List { get; set; }

    /// <summary>
    /// 总页数
    /// </summary>
    public int TotalPage { get; set; }

    /// <summary>
    /// 当前页
    /// </summary>
    public int CurrentPage { get; set; }

    /// <summary>
    /// 每页数量
    /// </summary>
    public int PageSize { get; set; }
}