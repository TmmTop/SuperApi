﻿using System.ComponentModel;

namespace SuperApi.Enum;

/// <summary>
/// 是否枚举
/// </summary>
[Description("是否枚举")]
public enum YesNoEnum
{
    /// <summary>
    /// 是
    /// </summary>
    [Description("是")]
    是 = 1,

    /// <summary>
    /// 否
    /// </summary>
    [Description("否")]
    否 = 2
}