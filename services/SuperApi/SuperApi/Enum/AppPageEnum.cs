using System.ComponentModel;

namespace TimServe.Core;

[Description("AppMenu显示位置")]
public enum AppPageEnum
{
    /// <summary>
    /// 首页
    /// </summary>
    [Description("首页")] IndexPage = 0,
    /// <summary>
    /// 首页底部
    /// </summary>
    [Description("首页底部")] IndexBottomPage = 1,
    /// <summary>
    /// 用户中心页
    /// </summary>
    /// <returns></returns>
    [Description("用户中心")] UserPage =2,
    /// <summary>
    /// AI乐园页
    /// </summary>
    /// <returns></returns>
    [Description("AI乐园")] AiPage = 3,
    /// <summary>
    /// 板块分类页
    /// </summary>
    /// <returns></returns>
    [Description("板块分类")] PlatePage =4,
    /// <summary>
    /// 发布页
    /// </summary>
    /// <returns></returns>
    [Description("发布")] PublishPage =5,
}