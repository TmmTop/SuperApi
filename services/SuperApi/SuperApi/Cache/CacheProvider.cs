using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NewLife.Caching;

namespace TimServe.Core;

/// <summary>
/// 缓存服务提供者
/// </summary>
public static class CacheProvider
{
    public static ICache? Instance { get; set; }

    /// <summary>
    /// 缓存注册（新生命Redis组件）
    /// </summary>
    /// <param name="services"></param>
    public static void AddCache(this IServiceCollection services)
    {
        ICache cache = Cache.Default;
        var prefix = ConfigProvider.Config["Cache:Prefix"]!;
        var configuration = ConfigProvider.Config["Cache:Redis:Configuration"]!;
        var cacheType = ConfigProvider.Config["Cache:CacheType"]!;
        if (cacheType == "Redis")
        {
            cache = new FullRedis(new RedisOptions
            {
                Configuration = configuration,
                Prefix = prefix
            });
            if (Convert.ToInt32(ConfigProvider.Config["Cache:Redis:MaxMessageSize"]) > 0)
                ((FullRedis)cache).MaxMessageSize =
                    Convert.ToInt32(ConfigProvider.Config["Cache:Redis:MaxMessageSize"]);
        }

        Instance = cache;
        services.AddSingleton(cache);
    }
}