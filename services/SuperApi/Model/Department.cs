using System.ComponentModel.DataAnnotations;
using SqlSugar;
using SuperApi.Enum;

namespace SuperApi.Model;
/// <summary>
/// 部门表
/// </summary>
[SugarTable(null, "部门表")]
[SugarIndex("index_{table}_N", nameof(Name), OrderByType.Asc)]
[SugarIndex("index_{table}_C", nameof(Code), OrderByType.Asc)]
[SugarIndex("index_{table}_T", nameof(Type), OrderByType.Asc)]
public class Department:Base
{
    /// <summary>
    /// 父Id
    /// </summary>
    [SugarColumn(ColumnDescription = "父Id")]
    public long Pid { get; set; }

    /// <summary>
    /// 名称
    /// </summary>
    [SugarColumn(ColumnDescription = "名称", Length = 64)]
    [Required, MaxLength(64)]
    public string Name { get; set; } = "";

    /// <summary>
    /// 编码
    /// </summary>
    [SugarColumn(ColumnDescription = "编码", Length = 64)]
    [MaxLength(64)]
    public string? Code { get; set; }

    /// <summary>
    /// 级别
    /// </summary>
    [SugarColumn(ColumnDescription = "级别")]
    public int? Level { get; set; }

    /// <summary>
    /// 机构类型-数据字典
    /// </summary>
    [SugarColumn(ColumnDescription = "机构类型", Length = 64)]
    [MaxLength(64)]
    public string? Type { get; set; }

    /// <summary>
    /// 负责人Id
    /// </summary>
    [SugarColumn(ColumnDescription = "负责人Id", IsNullable = true)]
    public long? DirectorId { get; set; }

    /// <summary>
    /// 负责人
    /// </summary>
    [Newtonsoft.Json.JsonIgnore]
    [System.Text.Json.Serialization.JsonIgnore]
    [Navigate(NavigateType.OneToOne, nameof(DirectorId))]
    public User Director { get; set; } = new User();

    /// <summary>
    /// 排序
    /// </summary>
    [SugarColumn(ColumnDescription = "排序")]
    public int OrderNo { get; set; } = 100;

    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnDescription = "状态")]
    public StatusEnum Status { get; set; } = StatusEnum.Enable;

    /// <summary>
    /// 备注
    /// </summary>
    [SugarColumn(ColumnDescription = "备注", Length = 128)]
    [MaxLength(128)]
    public string? Remark { get; set; }

    /// <summary>
    /// 部门子项
    /// </summary>
    [SugarColumn(IsIgnore = true)]
    public List<Department> Children { get; set; } = new List<Department>();

    /// <summary>
    /// 是否禁止选中
    /// </summary>
    [SugarColumn(IsIgnore = true)]
    public bool Disabled { get; set; }
}