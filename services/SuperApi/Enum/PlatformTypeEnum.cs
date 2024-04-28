using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 平台类型枚举
/// </summary>
[Description("平台类型枚举")]
public enum PlatformTypeEnum
{
    /// <summary>
    /// 微信公众号
    /// </summary>
    [Description("微信公众号")]
    微信公众号 = 1,

    /// <summary>
    /// 微信小程序
    /// </summary>
    [Description("微信小程序")]
    微信小程序 = 2,

    /// <summary>
    /// QQ
    /// </summary>
    [Description("QQ")]
    QQ = 3,

    /// <summary>
    /// 支付宝
    /// </summary>
    [Description("支付宝")]
    Alipay = 4,

    /// <summary>
    /// Gitee
    /// </summary>
    [Description("Gitee")]
    Gitee = 5,
}