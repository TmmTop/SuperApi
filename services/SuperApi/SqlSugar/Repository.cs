using NLog;
using SqlSugar;
using SuperApi.Dto;
using SuperApi.Utils;

namespace SuperApi.SqlSugar;

/// <summary>
/// Repository 实体仓储art
/// </summary>
/// <typeparam name="T"></typeparam>
public class Repository<T> : SimpleClient<T> where T : class, new()
{
    private static readonly Logger _logger = LogManager.GetCurrentClassLogger();
    /// <summary>
    /// 全局仓储对象
    /// </summary>
    public Repository()
    {
        if (!string.IsNullOrEmpty(SqlSugarSetup.CurrentConfigId))
        {
            Context = SqlSugarSetup.ITenant!.GetConnectionScope(SqlSugarSetup.CurrentConfigId);
        }
        else
        {
            Context = SqlSugarSetup.ITenant!.GetConnectionScope("Master");
        }
        Context.Ado.CommandTimeOut = 30; 
        Context.Aop.OnLogExecuting = (sql, pars) =>
        {
            var monitorItems = new List<string>();
            monitorItems.AddRange(new[]
            {
                $"━━━━━━━━━━━━━━━  仓储SQL信息 ━━━━━━━━━━━━━━━", $"##原始SQL## {sql}"
            });
            var monitor = LoggerUtil.Wrapper("SQL Monitor", "SulSugar解析"!, monitorItems.ToArray());
            _logger.Debug(monitor);
        };
        Context.Ado.IsDisableMasterSlaveSeparation = true;
        Context.Aop.DataExecuting = (oldValue, entityInfo) =>
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
    }

    /// <summary>
    /// 通用分页条件查询
    /// </summary>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    /// <param name="param"></param>
    /// <returns></returns>
    public async Task<Page> Page(int page, int pageSize, Dictionary<string, object> param)
    {
        var query = Context.Queryable<T>();
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value.ToString());
            }
            if (info.Key == "Order")
            {
                query.OrderBy(info.Value.ToString());
            }
            else
            {
                if (info.Key.Split('~').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                        FieldValue = info.Value.ToString()
                    });
                }
            }
        }
        RefAsync<int> total = 0;
        var result = await query
            .Where(where)
            .ToPageListAsync(page, pageSize, total);
        return new Page
        {
            List = result,
            CurrentPage = page,
            PageSize = pageSize,
            TotalPage = total
        };
    }

    /// <summary>
    /// 通用列表条件查询
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    public async Task<IEnumerable<T>> List(Dictionary<string, object> param)
    {
        var query = Context.Queryable<T>();
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value.ToString());
            }

            if (info.Key == "Order")
            {
                query.OrderBy(info.Value.ToString());
            }
            else
            {
                if (info.Key.Split('~').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('_')[1]),
                        FieldValue = info.Value.ToString()
                    });
                }
            }
        }
        var result = await query
            .Where(where)
            .ToListAsync();
        return result;
    }

    /// <summary>
    /// 通用树形列表条件查询
    /// </summary>
    /// <param name="childPropertyName">子项属性名称 默认Children</param>
    /// <param name="parentIdPropertyName">父级ID属性名称 默认Pid</param>
    /// <param name="rootValue">根值：从哪一级开始构造 默认0 顶级</param>
    /// <param name="primaryKeyPropertyName">主键属性名称 默认Id</param>
    /// <param name="param"></param>
    /// <returns></returns>
    public async Task<IEnumerable<T>> TreeList(Dictionary<string, object> param,
        string? childPropertyName = "Children",
        string? parentIdPropertyName = "Pid",
        int? rootValue = 0,
        string? primaryKeyPropertyName = "Id")
    {
        var query = Context.Queryable<T>();
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value.ToString());
            }

            if (info.Key == "Order")
            {
                query.OrderBy(info.Value.ToString());
            }
            else
            {
                if (info.Key.Split('~').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                        FieldValue = info.Value.ToString()
                    });
                }
            }
        }

        var result = await query
            .Where(where)
            .ToTreeAsync(childPropertyName, parentIdPropertyName, rootValue, primaryKeyPropertyName);
        return result;
    }

    /// <summary>
    /// 通用条件查询一条记录
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    public async Task<T> One(Dictionary<string, object> param)
    {
        var query = Context.Queryable<T>();
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value.ToString());
            }

            if (info.Key == "Order")
            {
                query.OrderBy(info.Value.ToString());
            }
            else
            {
                if (info.Key.Split('~').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                        FieldValue = info.Value.ToString()
                    });
                }
            }
        }

        var result = await query
            .Where(where)
            .FirstAsync();
        return result;
    }

    /// <summary>
    /// 添加
    /// </summary>
    /// <param name="model">实体对象</param>
    /// <returns></returns>
    public async Task<long> Add(T model)
    {
        var result = await Context.Insertable(model).ExecuteCommandAsync();
        return result;
    }

    /// <summary>
    /// 修改
    /// </summary>
    /// <param name="model">实体对象,必须包含Id</param>
    /// <returns></returns>
    public async Task<bool> Edit(T model)
    {
        var hasId = model.GetType().GetProperty("Id");
        if (hasId == null)
            throw new Exception("Id不存在！");
        var result = await Context.Updateable(model).IgnoreColumns("password").ExecuteCommandAsync();
        return result > 0;
    }

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="model">实体对象,必须包含Id</param>
    /// <returns></returns>
    public async Task<bool> Del(T model)
    {
        var hasId = model.GetType().GetProperty("Id");
        if (hasId == null)
            throw new Exception("Id不存在！");
        var result = await Context.Deleteable(model).ExecuteCommandAsync();
        return result > 0;
    }
}