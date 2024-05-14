
using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 角色数据范围枚举
/// </summary>
[Description("角色数据范围枚举")]
public enum DataScopeEnum
{
    /// <summary>
    /// 全部数据
    /// </summary>
    [Description("全部数据")]
    全部数据 = 1,

    /// <summary>
    /// 本部门及以下数据
    /// </summary>
    [Description("本部门及以下数据")]
    本部门及以下数据 = 2,

    /// <summary>
    /// 本部门数据
    /// </summary>
    [Description("本部门数据")]
    本部门数据 = 3,

    /// <summary>
    /// 仅本人数据
    /// </summary>
    [Description("仅本人数据")]
    仅本人数据 = 4,

    /// <summary>
    /// 自定义数据
    /// </summary>
    [Description("自定义数据")]
    自定义数据 = 5
}