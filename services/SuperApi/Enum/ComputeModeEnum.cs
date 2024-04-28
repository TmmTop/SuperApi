using System.ComponentModel;

namespace SuperApi.Enum;
[Description("计算方式")]
public enum ComputeModeEnum
{
    /// <summary>
    /// 增加
    /// </summary>
    [Description("增加")] Add=0,
    /// <summary>
    /// 扣除
    /// </summary>
    [Description("扣除")] Deduct=1,
}