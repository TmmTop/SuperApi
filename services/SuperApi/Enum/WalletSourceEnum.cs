using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 钱包余额来源枚举
/// </summary>
[Description("钱包余额来源枚举")]
public enum WalletSourceEnum
{
    /// <summary>
    /// 赞赏
    /// </summary>
    [Description("赞赏")] Appreciate = 1,

    /// <summary>
    /// 积分兑换
    /// </summary>
    [Description("积分兑换")] Exchange = 2,

    /// <summary>
    /// 充值
    /// </summary>
    [Description("充值")] Recharge = 3,
    
    /// <summary>
    /// 消费
    /// </summary>
    [Description("消费")] Use = 3,
}