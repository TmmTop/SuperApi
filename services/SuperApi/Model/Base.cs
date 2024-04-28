using SqlSugar;

namespace SuperApi.Model;

/// <summary>
/// 框架实体基类
/// </summary>
public class Base
{
    /// <summary>
    /// 主键Id
    /// </summary>
    [SugarColumn(ColumnName = "Id", ColumnDescription = "主键Id", IsPrimaryKey = true, IsIdentity = false)]
    public long Id { get; set; } = SnowFlakeSingle.Instance.NextId();
    
    /// <summary>
    /// 创建时间
    /// </summary>
    [SugarColumn(ColumnDescription = "创建时间", IsOnlyIgnoreUpdate = true)]
    public DateTime? CreateTime { get; set; }

    /// <summary>
    /// 更新时间
    /// </summary>
    [SugarColumn(ColumnDescription = "更新时间", IsOnlyIgnoreInsert = true)]
    public DateTime? UpdateTime { get; set; }

    /// <summary>
    /// 创建者Id
    /// </summary>
    [SugarColumn(ColumnDescription = "创建者Id", IsOnlyIgnoreUpdate = true)]
    public long? CreateUserId { get; set; }

    /// <summary>
    /// 修改者Id
    /// </summary>
    [SugarColumn(ColumnDescription = "修改者Id", IsOnlyIgnoreInsert = true)]
    public long? UpdateUserId { get; set; }

    /// <summary>
    /// 软删除
    /// </summary>
    [SugarColumn(ColumnDescription = "软删除")]
    public bool IsDelete { get; set; } = false;
}