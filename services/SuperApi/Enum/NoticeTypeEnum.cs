using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 通知公告状类型枚举
/// </summary>
[Description("通知公告状类型枚举")]
public enum NoticeTypeEnum
{
    /// <summary>
    /// 通知
    /// </summary>
    [Description("通知")]
    通知 = 1,

    /// <summary>
    /// 公告
    /// </summary>
    [Description("公告")]
    公告 = 2,
}