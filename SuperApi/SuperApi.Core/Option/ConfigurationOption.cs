namespace SuperApi.Core.Option;

/// <summary>
/// 全局配置选项
/// </summary>
public static class ConfigurationOption
{
    /// <summary>
    /// 配置
    /// </summary>
    public static IConfiguration config;

    /// <summary>
    /// 上下文关联
    /// </summary>
    /// <param name="configuration"></param>
    public static void Initialize(IConfiguration configuration)
    {
        config = configuration;
    }
}