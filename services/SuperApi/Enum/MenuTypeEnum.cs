using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 系统菜单类型枚举
/// </summary>
[Description("系统菜单类型枚举")]
public enum MenuTypeEnum
{
    /// <summary>
    /// 目录
    /// </summary>
    [Description("目录")]
    目录 = 1,

    /// <summary>
    /// 菜单
    /// </summary>
    [Description("菜单")]
    菜单 = 2,

    /// <summary>
    /// 按钮
    /// </summary>
    [Description("按钮")]
    按钮 = 3
}