namespace SuperApi.Core.DataBase;

/// <summary>
/// Repository 实体仓储
/// </summary>
/// <typeparam name="T"></typeparam>
public class Repository<T> : SimpleClient<T> where T : class, new()
{
    /// <summary>
    /// 全局仓储对象
    /// </summary>
    /// <param name="db"></param>
    public Repository(ISqlSugarClient db)
    {
        base.Context = db;
    }
}