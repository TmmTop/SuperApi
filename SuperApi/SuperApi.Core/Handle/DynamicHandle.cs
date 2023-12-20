namespace SuperApi.Core.Handle;

/// <summary>
/// 动态库表中间件
/// </summary>
public class DynamicHandle
{
    private readonly RequestDelegate _next;

    /// <summary>
    /// 中间件实例
    /// </summary>
    /// <param name="next"></param>
    public DynamicHandle(RequestDelegate next)
    {
        _next = next;
    }

    /// <summary>
    /// 中间件逻辑
    /// </summary>
    /// <param name="context"></param>
    /// <exception cref="Exception"></exception>
    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Path.Value!.Contains("dynamic"))
        {
            var connId = context.Request.Headers["ConnId"];
            var dataBaseName = context.Request.Headers["DataBaseName"];
            if (Convert.ToInt64(connId) == 999999 || dataBaseName == "SuperApi")
            {
                throw new Exception("内部参数禁止使用!");
            }

            //根据请求参数动态创建SqlSugar连接
            Setup.SqlSugar.AddConnection(new ConnectionConfig()
            {
                ConfigId = connId,
                DbType = DbType.MySql,
                ConnectionString = $"server=127.0.0.1;Database={dataBaseName};Uid=root;Pwd=root",
                IsAutoCloseConnection = true,
                LanguageType = LanguageType.Default,
            });
            var currentConn = Setup.SqlSugar.GetConnectionScope(connId);
            // 数据审计
            currentConn.Aop.DataExecuting = (oldValue, entityInfo) =>
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
            //Sql超时
            currentConn.Ado.CommandTimeOut = 30; //单位秒
            //打印Sql
            currentConn.Aop.OnLogExecuting = (sql, _) => { Console.WriteLine(sql); };
            currentConn.Ado.IsDisableMasterSlaveSeparation = true;
            currentConn.DbMaintenance.CreateDatabase();
        }
        //执行下一个context
        await _next(context);
    }
}

/// <summary>
/// 中间件拓展
/// </summary>
public static class DynamicHandleExtensions
{
    /// <summary>
    /// 中间件的注册
    /// </summary>
    /// <param name="app"></param>
    /// <returns></returns>
    /// <exception cref="ArgumentNullException"></exception>
    public static IApplicationBuilder UseDynamicHandle(this IApplicationBuilder app)
    {
        if (app == null)
        {
            throw new ArgumentNullException(nameof(app));
        }

        // 中间件的注册方式
        app.UseMiddleware<DynamicHandle>();
        return app;
    }
}