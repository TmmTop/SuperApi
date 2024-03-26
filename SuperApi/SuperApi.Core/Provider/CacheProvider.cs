namespace SuperApi.Core.Provider;

/// <summary>
/// 缓存服务提供者
/// </summary>
public class CacheProvider
{
    private readonly IConfiguration _config;
    /// <summary>
    /// 缓存提供者
    /// </summary>
    private static IEasyCachingProvider _cache;

    /// <summary>
    /// 缓存服务
    /// </summary>
    /// <param name="config"></param>
    /// <param name="cache"></param>
    public CacheProvider(IConfiguration config, IEasyCachingProviderFactory cache)
    {
        _config = config;
        if (_config.GetSection("Cache:CacheType").Value == "Memory")
        {
            _cache = cache.GetCachingProvider("memory");
        }
        else
        {
            _cache = cache.GetCachingProvider("redis");
        }
    }

    /// <summary>
    /// 获取缓存集合
    /// </summary>
    /// <returns></returns>
    public async Task<IEnumerable<string>> GetKeyList()
    {
        return await _cache.GetAllKeysByPrefixAsync(_config.GetSection("Cache:Prefix").Value);
    }

    /// <summary>
    /// 增加永久缓存，需手动删除
    /// </summary>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    public async Task SetAway(string key, object value)
    {
        await _cache.SetAsync($"{_config.GetSection("Cache:Prefix").Value! + key}", value,
            TimeSpan.FromDays(365000));
    }

    /// <summary>
    /// 增加缓存并设置过期时间
    /// </summary>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <param name="expire"></param>
    /// <returns></returns>
    public async Task Set(string key, object value, TimeSpan expire)
    {
        await _cache.SetAsync($"{_config.GetSection("Cache:Prefix").Value! + key}", value, expire);
    }

    /// <summary>
    /// 获取缓存
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <returns></returns>
    public async Task<CacheValue<T>> Get<T>(string key)
    {
        return await _cache.GetAsync<T>($"{_config.GetSection("Cache:Prefix").Value! + key}");
    }

    /// <summary>
    /// 删除缓存
    /// </summary>
    /// <param name="key"></param>
    /// <returns></returns>
    public async Task Remove(string key)
    {
        await _cache.RemoveAsync($"{_config.GetSection("Cache:Prefix").Value! + key}");
    }


    /// <summary>
    /// 根据前缀删除所有缓存
    /// </summary>
    /// <param name="prefixKey">键名前缀</param>
    /// <returns></returns>
    public async Task RemoveByPrefixKey(string prefixKey)
    {
        var all = await GetKeyList();
        var list = all.Where(x => x.StartsWith(_config.GetSection("Cache:Prefix").Value!)).ToList();
        await _cache.RemoveAllAsync(list);
    }

    /// <summary>
    /// 根据键名前缀获取缓存集合
    /// </summary>
    /// <returns></returns>
    public async Task<List<string>> GetKeysByPrefixKey()
    {
        var all = await GetKeyList();
        var list = all.Where(x => x.StartsWith(_config.GetSection("Cache:Prefix").Value!)).ToList();
        return list;
    }
}