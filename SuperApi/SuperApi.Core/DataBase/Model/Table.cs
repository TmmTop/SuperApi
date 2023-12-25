namespace SuperApi.Core.DataBase.Model;

/// <summary>
/// 数据表
/// </summary>
[SugarTable(null, "租户Table表")]
public class Table : BaseModel
{
    /// <summary>
    /// 表名
    /// </summary>
    [SugarColumn(ColumnDescription = "表名", Length = 32)]
    [Required, MaxLength(32)]
    public string TableName { get; set; } = "";

    /// <summary>
    /// 表注释
    /// </summary>
    [SugarColumn(ColumnDescription = "表注释", Length = 32)]
    [Required, MaxLength(32)]
    public string TableComment { get; set; } = "";
}