using System.ComponentModel;

namespace SuperApi.Enum;
/// <summary>
/// 订单状态枚举
/// </summary>
[Description("订单状态枚举")]
public enum OrderStateEnum
{
    /// <summary>
    /// 待付款
    /// </summary>
    [Description("待付款")] 待付款 = 0,

    /// <summary>
    /// 已付款
    /// </summary>
    [Description("已付款")] 已付款 = 0,

    /// <summary>
    /// 已完成
    /// </summary>
    [Description("已完成")] 已完成 = 0,

    /// <summary>
    /// 已取消
    /// </summary>
    [Description("已取消")] 已取消 = 0,

    /// <summary>
    /// 退款申请
    /// </summary>
    [Description("退款申请")] 退款申请 = 0,

    /// <summary>
    /// 退款中
    /// </summary>
    [Description("退款中")] 退款中 = 0,

    /// <summary>
    /// 退款完成
    /// </summary>
    [Description("退款完成")] 退款完成 = 0,

    /// <summary>
    /// 待发货
    /// </summary>
    [Description("待发货")] 待发货 = 0,

    /// <summary>
    /// 运输中
    /// </summary>
    [Description("运输中")] 运输中 = 0,

    /// <summary>
    /// 已送达
    /// </summary>
    [Description("已送达")] 已送达 = 0,
}