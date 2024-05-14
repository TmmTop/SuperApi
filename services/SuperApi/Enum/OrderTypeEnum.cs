using System.ComponentModel;

namespace SuperApi.Enum;
/// <summary>
/// 订单类型枚举
/// </summary>
[Description("订单类型枚举")]
public enum OrderTypeEnum
{
    /// <summary>
    /// 充值订单
    /// </summary>
    [Description("充值订单")] 充值订单 = 0,

    /// <summary>
    /// 普通订单
    /// </summary>
    [Description("普通订单")] 普通订单 = 1,
    
    /// <summary>
    /// 服务订单
    /// </summary>
    [Description("服务订单")] 服务订单 = 2,
}