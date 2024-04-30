using System.ComponentModel.DataAnnotations;
using SqlSugar;
using SuperApi.Enum;

namespace SuperApi.Model;
/// <summary>
/// 字典类型表
/// </summary>
[SugarTable(null, "字典类型表")]
[SugarIndex("index_{table}_N", nameof(Name), OrderByType.Asc)]
[SugarIndex("index_{table}_C", nameof(Code), OrderByType.Asc)]
public class DictType:Base
{
    /// <summary>
    /// 名称
    /// </summary>
    [SugarColumn(ColumnDescription = "名称", Length = 64)]
    [Required, MaxLength(64)]
    public  string Name { get; set; } = "";

    /// <summary>
    /// 编码
    /// </summary>
    [SugarColumn(ColumnDescription = "编码", Length = 64)]
    [Required, MaxLength(64)]
    public  string Code { get; set; }= "";

    /// <summary>
    /// 排序
    /// </summary>
    [SugarColumn(ColumnDescription = "排序")]
    public int OrderNo { get; set; } = 100;

    /// <summary>
    /// 备注
    /// </summary>
    [SugarColumn(ColumnDescription = "备注", Length = 256)]
    [MaxLength(256)]
    public string? Remark { get; set; }

    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnDescription = "状态")]
    public StatusEnum Status { get; set; } = StatusEnum.Enable;

    /// <summary>
    /// 字典值集合
    /// </summary>
    [Navigate(NavigateType.OneToMany, nameof(DictData.DictTypeId))]
    public List<DictData> Children { get; set; } = new List<DictData>();
}