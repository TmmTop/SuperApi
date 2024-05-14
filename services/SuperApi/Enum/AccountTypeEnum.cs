
using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 账号类型枚举
/// </summary>
[Description("账号类型枚举")]
public enum AccountTypeEnum
{
    /// <summary>
    /// 超级管理员
    /// </summary>
    [Description("超级管理员")]
    超级管理员 = 999,

    /// <summary>
    /// 系统管理员
    /// </summary>
    [Description("系统管理员")]
    系统管理员 = 888,

    /// <summary>
    /// 普通账号
    /// </summary>
    [Description("普通账号")]
    普通账号 = 777,

    /// <summary>
    /// 会员
    /// </summary>
    [Description("会员")]
    会员 = 666,
}