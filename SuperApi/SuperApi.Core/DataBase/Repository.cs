namespace SuperApi.Core.DataBase;

/// <summary>
/// Repository 实体仓储
/// </summary>
/// <typeparam name="T"></typeparam>
public class Repository<T> : SimpleClient<T> where T : class, new()
{
    private readonly ISqlSugarClient _db;

    /// <summary>
    /// 全局仓储对象
    /// </summary>
    /// <param name="db"></param>
    public Repository(ISqlSugarClient db)
    {
        Context = db;
        _db = db;
    }
    /// <summary>
    /// 通用分页条件查询
    /// </summary>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    /// <param name="param"></param>
    /// <returns></returns>
    public async Task<PageDto> Page(int page, int pageSize, Dictionary<string, string> param)
    {
        var query = _db.Queryable<T>();
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value);
            }

            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                if (info.Key.Split('_').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('_')[0],
                        ConditionalType = Tools.GenWhereType(info.Key.Split('_')[1]),
                        FieldValue = info.Value
                    });
                }
            }
        }

        RefAsync<int> total = 0;
        var result = await query
            .Where(where)
            .ToPageListAsync(page, pageSize, total);
        return new PageDto
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
    public async Task<IEnumerable<T>> List(Dictionary<string, string> param)
    {
        var query = _db.Queryable<T>();
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value);
            }

            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                if (info.Key.Split('_').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('_')[0],
                        ConditionalType = Tools.GenWhereType(info.Key.Split('_')[1]),
                        FieldValue = info.Value
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
    public async Task<IEnumerable<T>> TreeList(Dictionary<string, string> param,
        string? childPropertyName = "Children",
        string? parentIdPropertyName = "Pid",
        int? rootValue = 0,
        string? primaryKeyPropertyName = "Id")
    {
        var query = _db.Queryable<T>();
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value);
            }

            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                if (info.Key.Split('_').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('_')[0],
                        ConditionalType = Tools.GenWhereType(info.Key.Split('_')[1]),
                        FieldValue = info.Value
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
    public async Task<T> One(Dictionary<string, string> param)
    {
        var query = _db.Queryable<T>();
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value);
            }

            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                if (info.Key.Split('_').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('_')[0],
                        ConditionalType = Tools.GenWhereType(info.Key.Split('_')[1]),
                        FieldValue = info.Value
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
        var result = await _db.Insertable(model).ExecuteReturnSnowflakeIdAsync();
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
            throw new Exception(ResponseMsgOption.NotId);
        var result = await _db.Updateable(model).ExecuteCommandAsync();
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
            throw new Exception(ResponseMsgOption.NotId);
        var result = await _db.Deleteable(model).ExecuteCommandAsync();
        return result > 0;
    }
}