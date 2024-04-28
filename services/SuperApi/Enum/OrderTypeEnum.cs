using System.ComponentModel;

namespace SuperApi.Enum;

[Description("订单类型枚举")]
public enum OrderTypeEnum
{
    /// <summary>
    /// 充值订单
    /// </summary>
    [Description("充值订单")] Recharge = 0,

    /// <summary>
    /// 普通订单
    /// </summary>
    [Description("普通订单")] Default = 1,
    
    /// <summary>
    /// 服务订单
    /// </summary>
    [Description("服务订单")] Serve = 2,
}