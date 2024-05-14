using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 性别枚举
/// </summary>
[Description("性别枚举")]
public enum GenderEnum
{
    /// <summary>
    /// 男
    /// </summary>
    [Description("男")] 男 = 1,

    /// <summary>
    /// 女
    /// </summary>
    [Description("女")] 女 = 2,

    /// <summary>
    /// 其他
    /// </summary>
    [Description("其他")] 其他 = 3
}