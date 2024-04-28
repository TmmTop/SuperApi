namespace SuperApi.Dto;

/// <summary>
/// 文件输入
/// </summary>
public class FileInput 
{
    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 文件Url
    /// </summary>
    public string? Url { get; set; }
}