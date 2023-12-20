namespace SuperApi.Core.DataBase;

/// <summary>
/// ORM初始化
/// </summary>
public static class Setup
{
    /// <summary>
    /// ORM全局对象
    /// </summary>
    public static SqlSugarScope SqlSugar;

    /// <summary>
    /// SqlSugar服务
    /// </summary>
    /// <param name="services"></param>
    public static void AddSqlSugar(this IServiceCollection services)
    {
        SqlSugar = new SqlSugarScope(new ConnectionConfig()
        {
            ConfigId = 999999,
            DbType = DbType.MySql,
            ConnectionString = "server=127.0.0.1;Database=SuperApi;Uid=root;Pwd=root",
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
        });
        //Sql超时
        SqlSugar.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
        SqlSugar.Aop.OnLogExecuting = (sql, pars) => { Console.WriteLine(sql); };
        SqlSugar.Ado.IsDisableMasterSlaveSeparation = true;

        // 数据审计
        SqlSugar.Aop.DataExecuting = (oldValue, entityInfo) =>
        {
            if (entityInfo.OperationType == DataFilterType.InsertByObject)
            {
                // 主键(long类型)且没有值的---赋值雪花Id
                if (entityInfo.EntityColumnInfo.IsPrimarykey &&
                    entityInfo.EntityColumnInfo.PropertyInfo.PropertyType == typeof(long))
                {
                    var id = entityInfo.EntityColumnInfo.PropertyInfo.GetValue(entityInfo.EntityValue);
                    if (id == null || (string)id == "0")
                        entityInfo.SetValue(SnowFlakeSingle.instance.NextId());
                }

                if (entityInfo.PropertyName == "CreateTime")
                    entityInfo.SetValue(DateTime.Now);
            }

            if (entityInfo.OperationType == DataFilterType.UpdateByObject)
            {
                if (entityInfo.PropertyName == "UpdateTime")
                    entityInfo.SetValue(DateTime.Now);
            }
        };
        SqlSugar.DbMaintenance.CreateDatabase();
        //AOP里面可以获取IOC对象
        services.AddHttpContextAccessor();
        // 单例注册
        services.AddSingleton<ISqlSugarClient>(SqlSugar); // 单例注册
        // 仓储注册
        services.AddScoped(typeof(Repository<>));
    }
}