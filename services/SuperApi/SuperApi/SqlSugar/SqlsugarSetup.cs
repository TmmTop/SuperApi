using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using NLog;
using SqlSugar;
using TimServe.Core.Entity.System;

namespace TimServe.Core;

/// <summary>
/// ORM初始化
/// </summary>
public static class SqlsugarSetup
{
    // 多租户实例
    public static ITenant ITenant { get; set; }
    public static string CurrentConfigId { get; set; }
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
                IsAutoDeleteQueryFilter = true, // 启用删除查询过滤器
                IsAutoUpdateQueryFilter = true, // 启用更新查询过滤器
                SqlServerCodeFirstNvarchar = true // 采用Nvarchar
            },
            ConfigureExternalServices = new ConfigureExternalServices()
            {
                //处理列
                EntityService = (x, p) =>
                {
                    // 只处理贴了特性[SugarColumn]列
                    if (!x.GetCustomAttributes<SugarColumn>().Any())
                        return;
                    if (new NullabilityInfoContext().Create(x).WriteState is NullabilityState.Nullable)
                        p.IsNullable = true;
                    //ToUnderLine驼峰转下划线方法
                    p.DbColumnName = UtilMethods.ToUnderLine(p.DbColumnName);
                },
                //处理表
                EntityNameService = (x, p) =>
                {
                    // 禁止删除非 sqlSugar 创建的列
                    p.IsDisabledDelete = true;
                    // 只处理贴了特性[SugarTable]的实体
                    if (!x.GetCustomAttributes<SugarTable>().Any())
                        return;
                    //ToUnderLine驼峰转下划线方法
                    p.DbTableName = UtilMethods.ToUnderLine(p.DbTableName);
                }
            }
        });
        CurrentConfigId = ConfigProvider.Config["DbConnection:ConfigId"]!;
        ITenant = sqlSugar;
        //AOP里面可以获取IOC对象
        services.AddHttpContextAccessor();
        // 单例注册
        services.AddSingleton<ISqlSugarClient>(sqlSugar);
        // 仓储注册
        services.AddScoped(typeof(Repository<>));
        // 全局事务注册
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
        //Sql超时
        dbProvider.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
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
        // 数据审计
        dbProvider.Aop.DataExecuting = (oldValue, entityInfo) =>
        {
            if (entityInfo.OperationType == DataFilterType.InsertByObject)
            {
                // 主键(long类型)且没有值的---赋值雪花Id
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
        // 创建数据库
        dbProvider.DbMaintenance.CreateDatabase();
        // 创建表
        Type[] types = typeof(Site).Assembly.GetTypes()
            .Where(u => u.GetCustomAttributes<SugarTable>().Any())
            .ToArray();
        dbProvider.CodeFirst.InitTables(types);
    }

    // /// <summary>
    // /// 初始化租户业务数据库
    // /// </summary>
    // /// <param name="iTenant"></param>
    // /// <param name="configId"></param>
    // public static void InitTenantDatabase(ITenant iTenant, long configId)
    // { 
    //     SqlSugarScopeProvider dbProvider = iTenant.GetConnectionScope(configId);
    //     //Sql超时
    //     dbProvider.Ado.CommandTimeOut = 30; //单位秒
    //     //打印Sql
    //     dbProvider.Aop.OnLogExecuting = (sql, pars) =>
    //     {
    //         var monitorItems = new List<string>();
    //         monitorItems.AddRange(new[]
    //         {
    //             $"━━━━━━━━━━━━━━━  迁移信息 ━━━━━━━━━━━━━━━", $"##原始SQL## {sql}"
    //         });
    //         var monitor = LoggerUtil.Wrapper("SQL Monitor", "SulSugar解析"!, monitorItems.ToArray());
    //         Logger.Debug(monitor);
    //     };
    //     dbProvider.Ado.IsDisableMasterSlaveSeparation = true;
    //     // 数据审计
    //     dbProvider.Aop.DataExecuting = (oldValue, entityInfo) =>
    //     {
    //         if (entityInfo.OperationType == DataFilterType.InsertByObject)
    //         {
    //             // 主键(long类型)且没有值的---赋值雪花Id
    //             if (entityInfo.EntityColumnInfo.IsPrimarykey &&
    //                 entityInfo.EntityColumnInfo.PropertyInfo.PropertyType == typeof(long))
    //             {
    //                 var id = entityInfo.EntityColumnInfo.PropertyInfo.GetValue(entityInfo.EntityValue);
    //                 if (id == null || (long)id == 0)
    //                     entityInfo.SetValue(SnowFlakeSingle.instance.NextId());
    //             }
    //
    //             if (entityInfo.PropertyName == "CreateTime")
    //                 entityInfo.SetValue(DateTime.Now);
    //         }
    //
    //         if (entityInfo.OperationType == DataFilterType.UpdateByObject && entityInfo.PropertyName == "UpdateTime")
    //         {
    //             entityInfo.SetValue(DateTime.Now);
    //         }
    //     };
    //     // 初始化/创建数据库
    //     dbProvider.DbMaintenance.CreateDatabase();
    //     dbProvider.CodeFirst.InitTables(typeof(Tenant));
    // }
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

    private static void InitTenantDataBase()
    {
    }
}