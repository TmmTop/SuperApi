using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 积分来源枚举
/// </summary>
[Description("积分来源枚举")]
public enum IntegralSourceEnum
{
    /// <summary>
    /// 签到
    /// </summary>
    [Description("签到")] SignIn = 1,

    /// <summary>
    /// 发贴/发布文章
    /// </summary>
    [Description("发贴/发布文章")] Post = 2,

    /// <summary>
    /// 消费
    /// </summary>
    [Description("消费")] Use = 3,

    /// <summary>
    /// 赠送好友
    /// </summary>
    [Description("赠送好友")] Give = 4,
}