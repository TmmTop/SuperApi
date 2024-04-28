using System.ComponentModel.DataAnnotations;
using SqlSugar;

namespace SuperApi.Model;

/// <summary>
/// 数据表
/// </summary>
[SugarTable(null, "Table表")]
public class Table : Base
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