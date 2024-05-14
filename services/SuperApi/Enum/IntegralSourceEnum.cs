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
    [Description("签到")] 签到 = 1,
    
    /// <summary>
    /// 消费
    /// </summary>
    [Description("消费")] 消费 = 3,

    /// <summary>
    /// 赠送
    /// </summary>
    [Description("赠送")] 赠送 = 4,
}