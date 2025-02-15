using System.ComponentModel.DataAnnotations;
using SqlSugar;

namespace SuperApi.Model;

/// <summary>
/// 数据表的字段
/// </summary>
[SugarTable(null, "Table字段表")]
[SugarIndex("index_{table}_N", nameof(FieldName), OrderByType.Asc)]
[SugarIndex("index_{table}_C", nameof(FieldType), OrderByType.Asc)]
public class Field : Base
{
    /// <summary>
    /// 关联表ID
    /// </summary>
    [SugarColumn(ColumnDescription = "关联表ID")]
    public long TableId { get; set; } = 0;

    /// <summary>
    /// 字段名称
    /// </summary>
    [SugarColumn(ColumnDescription = "字段名称", Length = 32)]
    [Required, MaxLength(32)]
    public string FieldName { get; set; } = "";
    /// <summary>
    /// 字段类型
    /// </summary>
    [SugarColumn(ColumnDescription = "字段类型", Length = 32)]
    [Required, MaxLength(32)]
    public string FieldType { get; set; } = "";

    /// <summary>
    /// 字段注释
    /// </summary>
    [SugarColumn(ColumnDescription = "字段注释", Length = 32)]
    [Required, MaxLength(32)]
    public string FieldComment { get; set; } = "";
}