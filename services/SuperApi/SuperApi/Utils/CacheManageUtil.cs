using NewLife.Caching;
using NewLife.Caching.Models;

namespace TimServe.Core;

public class CacheManageUtil
{
    private static readonly ICache Cache = CacheProvider.Instance!;
    private static readonly string Prefix = ConfigProvider.Config["Cache:Prefix"]!;
    private static readonly string CacheType = ConfigProvider.Config["Cache:CacheType"]!;
    /// <summary>
    /// 获取缓存键名集合
    /// </summary>
    /// <returns></returns>
    public static List<string> GetKeyList()
    {
        return CacheType != "Redis"
            ? Cache.Keys.Where(u => u.StartsWith(Prefix)).Select(u => u[Prefix.Length..]).OrderBy(u => u).ToList()
            : ((FullRedis)Cache).Search($"{Prefix}*", int.MaxValue).Select(u => u[Prefix.Length..]).OrderBy(u => u)
            .ToList();
    }

    /// <summary>
    /// 删除缓存
    /// </summary>
    /// <param name="key"></param>
    /// <returns></returns>
    public static int Remove(string key)
    {
        return Cache.Remove($"{Prefix}{key}");
    }

    /// <summary>
    /// 根据键名前缀删除缓存
    /// </summary>
    /// <param name="prefixKey">键名前缀</param>
    /// <returns></returns>
    public static int RemoveByPrefixKey(string prefixKey)
    {
        var delKeys = CacheType != "Redis"
            ? Cache.Keys.Where(u => u.StartsWith($"{Prefix}{prefixKey}")).ToArray()
            : ((FullRedis)Cache).Search($"{Prefix}{prefixKey}*", int.MaxValue).ToArray();
        return Cache.Remove(delKeys);
    }

    /// <summary>
    /// 根据键名前缀获取键名集合
    /// <param name="prefixKey">键名前缀</param>
    /// <returns></returns>
    public static List<string> GetKeysByPrefixKey(string prefixKey)
    {
        return CacheType != "Redis"
            ? Cache.Keys.Where(u => u.StartsWith($"{Prefix}{prefixKey}")).Select(u => u[Prefix.Length..]).ToList()
            : ((FullRedis)Cache).Search($"{Prefix}{prefixKey}*", int.MaxValue).Select(u => u[Prefix.Length..]).ToList();
    }

    /// <summary>
    /// 获取缓存值
    /// </summary>
    /// <param name="key"></param>
    /// <returns></returns>
    public static object GetValue(string key)
    {
        return CacheType != "Redis"
            ? Cache.Get<object>($"{Prefix}{key}")!
            : Cache.Get<string>($"{Prefix}{key}")!;
    }

    /// <summary>
    /// 增加缓存
    /// </summary>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    public static bool Set(string key, object value)
    {
        if (string.IsNullOrWhiteSpace(key)) return false;
        return Cache.Set($"{Prefix}{key}", value);
    }

    /// <summary>
    /// 增加缓存并设置过期时间
    /// </summary>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <param name="expire"></param>
    /// <returns></returns>
    public static bool Set(string key, object value, TimeSpan expire)
    {
        if (string.IsNullOrWhiteSpace(key)) return false;
        return Cache.Set($"{Prefix}{key}", value, expire);
    }

    /// <summary>
    /// 获取缓存
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <returns></returns>
    public static T Get<T>(string key)
    {
        return Cache.Get<T>($"{Prefix}{key}")!;
    }

    /// <summary>
    /// 检查缓存是否存在
    /// </summary>
    /// <param name="key">键</param>
    /// <returns></returns>
    public static bool ExistKey(string key)
    {
        return Cache.ContainsKey($"{Prefix}{key}");
    }

    /// <summary>
    /// 获取或添加缓存，在数据不存在时执行委托请求数据
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="callback"></param>
    /// <param name="expire">过期时间，单位秒</param>
    /// <returns></returns>
    public static T GetOrAdd<T>(string key, Func<string, T> callback, int expire = -1)
    {
        if (string.IsNullOrWhiteSpace(key)) return default!;
        return Cache.GetOrAdd($"{Prefix}{key}", callback, expire)!;
    }


    public static RedisHash<string, T> GetHashMap<T>(string key)
    {
        return (Cache.GetDictionary<T>(key) as RedisHash<string, T>)!;
    }

    /// <summary>
    /// 批量添加HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="dic"></param>
    /// <returns></returns>
    public static bool HashSet<T>(string key, Dictionary<string, T> dic)
    {
        var hash = GetHashMap<T>(key);
        return hash.HMSet(dic);
    }

    /// <summary>
    /// 添加一条HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="hashKey"></param>
    /// <param name="value"></param>
    public static void HashAdd<T>(string key, string hashKey, T value)
    {
        var hash = GetHashMap<T>(key);
        hash.Add(hashKey, value);
    }

    /// <summary>
    /// 获取多条HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="fields"></param>
    /// <returns></returns>
    public static List<T> HashGet<T>(string key, params string[] fields)
    {
        var hash = GetHashMap<T>(key);
        var result = hash.HMGet(fields);
        return result.ToList();
    }

    /// <summary>
    /// 获取一条HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="field"></param>
    /// <returns></returns>
    public static T HashGetOne<T>(string key, string field)
    {
        var hash = GetHashMap<T>(key);
        var result = hash.HMGet(new string[] { field });
        return result[0];
    }

    /// <summary>
    /// 根据KEY获取所有HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <returns></returns>
    public static IDictionary<string, T> HashGetAll<T>(string key)
    {
        var hash = GetHashMap<T>(key);
        return hash.GetAll();
    }

    /// <summary>
    /// 删除HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="fields"></param>
    /// <returns></returns>
    public static int HashDel<T>(string key, params string[] fields)
    {
        var hash = GetHashMap<T>(key);
        return hash.HDel(fields);
    }

    /// <summary>
    /// 搜索HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="searchModel"></param>
    /// <returns></returns>
    public static List<KeyValuePair<string, T>> HashSearch<T>(string key, SearchModel searchModel)
    {
        var hash = GetHashMap<T>(key);
        return hash.Search(searchModel).ToList();
    }

    /// <summary>
    /// 搜索HASH
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="pattern"></param>
    /// <param name="count"></param>
    /// <returns></returns>
    public static List<KeyValuePair<string, T>> HashSearch<T>(string key, string pattern, int count)
    {
        var hash = GetHashMap<T>(key);
        return hash.Search(pattern, count).ToList();
    }
}