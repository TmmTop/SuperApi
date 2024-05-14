using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 操作日志类型枚举
/// </summary>
[Description("操作日志类型枚举")]
public enum OpLogTypeEnum
{
    /// <summary>
    /// 默认日志
    /// </summary>
    [Description("默认日志")] 默认日志 = 1,
    /// <summary>
    /// 登录日志
    /// </summary>
    [Description("登录日志")] 登录日志 = 2
}