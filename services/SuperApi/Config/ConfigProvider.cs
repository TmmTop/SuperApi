namespace SuperApi.Config;

public static class ConfigProvider
{
    /// <summary>
    /// 配置
    /// </summary>
    public static IConfiguration Config=new ConfigurationManager();
    /// <summary>
    /// 上下文关联
    /// </summary>
    /// <param name="configuration"></param>
    public static void Initialize(IConfiguration configuration)
    {
        Config = configuration;
    }
}