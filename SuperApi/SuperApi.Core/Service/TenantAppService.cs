namespace SuperApi.Core.Service;

/// <summary>
/// 租户模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class TenantAppService : IDynamicWebApi
{
    /// <summary>
    /// 获取库表信息
    /// </summary>
    /// <param name="tenantName">数据库|租户名称</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetTables(string tenantName)
    {
        if (string.IsNullOrWhiteSpace(tenantName))
            throw new Exception("租户名称不能为空！");
        var connId = SnowFlakeSingle.instance.NextId();
        Setup.SqlSugar.AddConnection(new ConnectionConfig()
        {
            ConfigId = connId,
            DbType = DbType.MySql,
            ConnectionString = "server=127.0.0.1;Database=information_schema;Uid=root;Pwd=root",
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
        });
        var currentConn = Setup.SqlSugar.GetConnectionScope(connId);
        //Sql超时
        currentConn.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
        currentConn.Aop.OnLogExecuting = (sql, _) => { Console.WriteLine(sql); };
        //构造查询
        var where = new List<IConditionalModel>()
        {
            new ConditionalModel
            {
                FieldName = "TABLE_SCHEMA",
                ConditionalType = ConditionalType.Equal,
                FieldValue = tenantName
            }
        };
        var result = await currentConn.Queryable<object>().AS("TABLES").Where(where)
            .ToListAsync();
        currentConn.Close();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result);
    }

    /// <summary>
    /// 根据当前租户/库和表名查询该表下的所有字段
    /// </summary>
    /// <param name="tenantName">数据库|租户名称</param>
    /// <param name="tableName">表名</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetPropertys(string tenantName, string tableName)
    {
        var connId = SnowFlakeSingle.instance.NextId();
        Setup.SqlSugar.AddConnection(new ConnectionConfig()
        {
            ConfigId = connId,
            DbType = DbType.MySql,
            ConnectionString = "server=127.0.0.1;Database=information_schema;Uid=root;Pwd=root",
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
        });
        var currentConn = Setup.SqlSugar.GetConnectionScope(connId);
        //Sql超时
        currentConn.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
        currentConn.Aop.OnLogExecuting = (sql, _) => { Console.WriteLine(sql); };
        //构造查询
        var where = new List<IConditionalModel>()
        {
            new ConditionalModel
            {
                FieldName = "TABLE_SCHEMA",
                ConditionalType = ConditionalType.Equal,
                FieldValue = tenantName
            },
            new ConditionalModel
            {
                FieldName = "TABLE_NAME",
                ConditionalType = ConditionalType.Equal,
                FieldValue = tableName
            }
        };
        var result = await currentConn.Queryable<object>().AS("COLUMNS")
            .Where(where)
            .ToListAsync();
        currentConn.Close();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result);
    }

    /// <summary>
    /// 删表
    /// </summary>
    /// <param name="tenantName"></param>
    /// <param name="tableName"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> DelTable(string tenantName, string tableName)
    {
        if (string.IsNullOrWhiteSpace(tenantName))
            throw new Exception("租户名称不能为空！");
        var connId = SnowFlakeSingle.instance.NextId();
        Setup.SqlSugar.AddConnection(new ConnectionConfig()
        {
            ConfigId = connId,
            DbType = DbType.MySql,
            ConnectionString = $"server=127.0.0.1;Database={tenantName};Uid=root;Pwd=root",
            IsAutoCloseConnection = true,
            LanguageType = LanguageType.Default,
        });
        var currentConn = Setup.SqlSugar.GetConnectionScope(connId);
        //Sql超时
        currentConn.Ado.CommandTimeOut = 30; //单位秒
        //打印Sql
        currentConn.Aop.OnLogExecuting = (sql, _) => { Console.WriteLine(sql); };
        await currentConn.Ado.ExecuteCommandAsync($"DROP TABLE `{tableName}`;");
        currentConn.Close();
        return RDto.R(HttpStatusCode.OK, "操作成功！", true);
    }
}