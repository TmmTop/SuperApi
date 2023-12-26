namespace SuperApi.Core.DataBase;

/// <summary>
/// ORM初始化
/// </summary>
public static class Setup
{
    /// <summary>
    /// SqlSugar服务
    /// </summary>
    /// <param name="services"></param>
    public static void AddSqlSugar(this IServiceCollection services)
    {
        var master = new SqlSugarScope(new ConnectionConfig()
        {
            ConfigId = ConfigurationOption.config.GetSection("DbConnection:ConfigId").Value!,
            DbType = ChangeType(ConfigurationOption.config.GetSection("DbConnection:DbType").Value!),
            ConnectionString = ConfigurationOption.config.GetSection("DbConnection:ConnectionString").Value!,
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
            InitKeyType = InitKeyType.Attribute,
            MoreSettings = new ConnMoreSettings
            {
                IsAutoRemoveDataCache = true,
                IsAutoDeleteQueryFilter = true, // 启用删除查询过滤器
                IsAutoUpdateQueryFilter = true, // 启用更新查询过滤器
                SqlServerCodeFirstNvarchar = true // 采用Nvarchar
            },
            ConfigureExternalServices = new ConfigureExternalServices()
            {
                EntityService = (x, p) => //处理列名
                {
                    // 只处理贴了特性[SugarColumn]列
                    if (!x.GetCustomAttributes<SugarColumn>().Any())
                        return;
                    if (new NullabilityInfoContext().Create(x).WriteState is NullabilityState.Nullable)
                        p.IsNullable = true;
                    //最好排除DTO类
                    p.DbColumnName = UtilMethods.ToUnderLine(p.DbColumnName); //ToUnderLine驼峰转下划线方法
                },
                EntityNameService = (x, p) => //处理表名
                {
                    p.IsDisabledDelete = true; // 禁止删除非 sqlsugar 创建的列
                    // 只处理贴了特性[SugarTable]表
                    if (!x.GetCustomAttributes<SugarTable>().Any())
                        return;
                    //最好排除DTO类
                    p.DbTableName = UtilMethods.ToUnderLine(p.DbTableName); //ToUnderLine驼峰转下划线方法
                }
            }
        });
        //Sql超时
        master.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
        master.Aop.OnLogExecuting = (sql, pars) => { Console.WriteLine(sql); };
        master.Ado.IsDisableMasterSlaveSeparation = true;
        // 数据审计
        master.Aop.DataExecuting = (oldValue, entityInfo) =>
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

            if (entityInfo.OperationType == DataFilterType.UpdateByObject && entityInfo.PropertyName == "UpdateTime")
            {
                entityInfo.SetValue(DateTime.Now);
            }
        };
        //启用数据库自动创建后执行以下代码
        master.DbMaintenance.CreateDatabase();
        Type[] types = typeof(Tenant).Assembly.GetTypes()
            .Where(it => it.FullName!.Contains("SuperApi.Core.DataBase.Model"))
            .ToArray();
        master.CodeFirst.InitTables(types);
        //启用数据库自动创建后执行以上代码

        //AOP里面可以获取IOC对象
        services.AddHttpContextAccessor();
        // 单例注册
        services.AddSingleton<ISqlSugarClient>(master); // 单例注册
        // 仓储注册
        services.AddScoped(typeof(Repository<>));
    }

    public static DbType ChangeType(string type)
    {
        DbType newType = DbType.MySql;
        switch (type)
        {
            case "MySql":
                newType = DbType.MySql;
                break;
            case "SqlServer":
                newType = DbType.SqlServer;
                break;
            case "Sqlite":
                newType = DbType.Sqlite;
                break;
            case "Oracle":
                newType = DbType.Oracle;
                break;
            case "PostgreSQL":
                newType = DbType.PostgreSQL;
                break;
        }

        return newType;
    }
}