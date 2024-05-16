using System.Reflection;
using System.Security.Policy;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using NLog;
using SqlSugar;
using SuperApi.Config;
using SuperApi.Model;
using SuperApi.Utils;

namespace SuperApi.SqlSugar;

/// <summary>
/// ORM初始化
/// </summary>
public static class SqlSugarSetup
{
    public static ITenant? ITenant { get; set; }
    public static string? CurrentConfigId { get; set; }
    private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

    /// <summary>
    /// SqlSugar服务提供者
    /// </summary>
    /// <param name="services"></param>
    public static void AddSqlSugar(this IServiceCollection services)
    {
        var sqlSugar = new SqlSugarScope(new ConnectionConfig
        {
            ConfigId = ConfigProvider.Config["DbConnection:ConfigId"]!,
            DbType = ChangeType(ConfigProvider.Config["DbConnection:DbType"]!),
            ConnectionString = ConfigProvider.Config["DbConnection:ConnectionString"]!,
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
            InitKeyType = InitKeyType.Attribute,
            MoreSettings = new ConnMoreSettings
            {
                IsAutoRemoveDataCache = true,
                IsAutoDeleteQueryFilter = true,
                IsAutoUpdateQueryFilter = true,
                SqlServerCodeFirstNvarchar = true
            },
            ConfigureExternalServices = new ConfigureExternalServices()
            {
                EntityService = (x, p) =>
                {
                    if (!x.GetCustomAttributes<SugarColumn>().Any())
                        return;
                    if (new NullabilityInfoContext().Create(x).WriteState is NullabilityState.Nullable)
                        p.IsNullable = true;
                    // p.DbColumnName = UtilMethods.ToUnderLine(p.DbColumnName);
                },
                EntityNameService = (x, p) =>
                {
                    p.IsDisabledDelete = true;
                    if (!x.GetCustomAttributes<SugarTable>().Any())
                        return;
                    // p.DbTableName = UtilMethods.ToUnderLine(p.DbTableName);
                }
            }
        });
        CurrentConfigId = ConfigProvider.Config["DbConnection:ConfigId"]!;
        ITenant = sqlSugar;
        services.AddHttpContextAccessor();
        services.AddSingleton<ISqlSugarClient>(sqlSugar);
        services.AddScoped(typeof(Repository<>));
        services.AddScoped(typeof(SugarUnitOfWork));
        InitDatabase(sqlSugar, CurrentConfigId);
    }

    /// <summary>
    /// 初始化数据库
    /// </summary>
    /// <param name="db"></param>
    /// <param name="configId"></param>
    public static void InitDatabase(SqlSugarScope db, object configId)
    {
        SqlSugarScopeProvider dbProvider = db.GetConnectionScope(configId);
        dbProvider.Ado.CommandTimeOut = 30;
        dbProvider.Aop.OnLogExecuting = (sql, pars) =>
        {
            var monitorItems = new List<string>();
            monitorItems.AddRange(new[]
            {
                $"━━━━━━━━━━━━━━━  迁移信息 ━━━━━━━━━━━━━━━", $"##原始SQL## {sql}"
            });
            var monitor = LoggerUtil.Wrapper("SQL Monitor", "SulSugar解析"!, monitorItems.ToArray());
            _logger.Debug(monitor);
        };
        dbProvider.Ado.IsDisableMasterSlaveSeparation = true;
        dbProvider.Aop.DataExecuting = (oldValue, entityInfo) =>
        {
            if (entityInfo.OperationType == DataFilterType.InsertByObject)
            {
                if (entityInfo.EntityColumnInfo.IsPrimarykey &&
                    entityInfo.EntityColumnInfo.PropertyInfo.PropertyType == typeof(long))
                {
                    var id = entityInfo.EntityColumnInfo.PropertyInfo.GetValue(entityInfo.EntityValue);
                    if (id == null || (long)id == 0)
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
        dbProvider.DbMaintenance.CreateDatabase();
        Type[] types = typeof(Table).Assembly.GetTypes()
            .Where(u => u.GetCustomAttributes<SugarTable>().Any())
            .ToArray();
        dbProvider.CodeFirst.InitTables(types);
        //初始化用户数据
        Seed.UserSeed.Init(db);
        Seed.PostSeed.Init(db);
        Seed.DepartmentSeed.Init(db);
        Seed.MenuSeed.Init(db);
    }

    /// <summary>
    /// 数据库类型转换
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    private static DbType ChangeType(string type)
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