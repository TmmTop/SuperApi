namespace SuperApi.Core.Service;

/// <summary>
/// 超级动态API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class DynamicAppService : IDynamicWebApi
{
    private Type _builderType;
    private readonly DynamicBuilder _builder;
    private readonly SqlSugarScopeProvider _dbProvider;
    private readonly IHttpContextAccessor _httpContextAccessor;

    /// <summary>
    /// 超级动态API实例
    /// </summary>
    /// <param name="httpContextAccessor"></param>
    public DynamicAppService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
        var connId = _httpContextAccessor.HttpContext!.Request.Headers["ConnId"];
        var tableName = _httpContextAccessor.HttpContext!.Request.Headers["TableName"];
        var headers = _httpContextAccessor.HttpContext!.Request.Headers;
        _dbProvider = Setup.SqlSugar.GetConnectionScope(connId);
        _builder = _dbProvider.DynamicBuilder();
        if (string.IsNullOrWhiteSpace(tableName))
        {
            throw new Exception("TableName不能为空！");
        }

        var typeClass = _builder.CreateClass(tableName, new SugarTable());
        //构建默认字段Id 
        typeClass.CreateProperty("Id", typeof(string),
            new SugarColumn() { IsPrimaryKey = true, IsIdentity = false, ColumnDescription = "主键编号" });
        //构建默认字段CreateTime
        typeClass.CreateProperty("CreateTime", typeof(DateTime), new SugarColumn() { ColumnDescription = "创建时间" });
        //构建默认字段UpdateTime
        typeClass.CreateProperty("UpdateTime", typeof(DateTime), new SugarColumn() { ColumnDescription = "修改时间" });
        foreach (var header in headers)
        {
            if (header.Key.Contains("db_") && !header.Key.Contains("db_Id") && !header.Key.Contains("db_CreateTime") &&
                !header.Key.Contains("db_UpdateTime"))
            {
                var desc = HttpUtility.UrlDecode(header.Value.ToString().Split("_")[1]);
                var key = header.Key.Substring(3);
                var value = header.Value.ToString().Split("_")[0];
                if (value.Equals("varchar"))
                {
                    typeClass.CreateProperty(key, typeof(string), new SugarColumn()
                    {
                        ColumnDataType = "varchar",
                        Length = 255,
                        ColumnDescription = desc
                    });
                }

                if (value.Equals("long"))
                {
                    typeClass.CreateProperty(key, typeof(long), new SugarColumn()
                    {
                        ColumnDescription = desc
                    });
                }

                if (value.Equals("int"))
                {
                    typeClass.CreateProperty(key, typeof(int), new SugarColumn()
                    {
                        ColumnDescription = desc
                    });
                }

                if (value.Equals("float"))
                {
                    typeClass.CreateProperty(key, typeof(float), new SugarColumn()
                    {
                        ColumnDescription = desc
                    });
                }

                if (value.Equals("money"))
                {
                    typeClass.CreateProperty(key, typeof(decimal),
                        new SugarColumn()
                        {
                            ColumnDescription = desc,
                            DecimalDigits = 2
                        });
                }

                if (value.Equals("time"))
                {
                    typeClass.CreateProperty(key, typeof(DateTime), new SugarColumn()
                    {
                        ColumnDescription = desc
                    });
                }

                if (value.Equals("longtext"))
                {
                    typeClass.CreateProperty(key, typeof(string),
                        new SugarColumn()
                        {
                            ColumnDataType = "longtext",
                            ColumnDescription = desc
                        });
                }

                if (value.Equals("bool"))
                {
                    typeClass.CreateProperty(key, typeof(bool), new SugarColumn()
                    {
                        ColumnDescription = desc
                    });
                }
            }
        }

        _builderType = typeClass.BuilderType();
    }

    /// <summary>
    /// 动态创建数据表
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public JsonResult CreateTable()
    {
        _dbProvider.CodeFirst.InitTables(_builderType);
        return RDto.R(HttpStatusCode.OK, _builderType.FullName + "数据表迁移成功！");
    }

    /// <summary>
    /// 无实体添加
    /// </summary>
    /// <param name="param">实体对象</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Add(string param)
    {
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }
        var model = _dbProvider.DynamicBuilder().CreateObjectByType(_builderType, dict);
        //设置主键Id=雪花ID
        model.GetType().GetProperty("Id")!.SetValue(model, SnowFlakeSingle.instance.NextId().ToString());
        var result = await _dbProvider.InsertableByObject(model).ExecuteCommandAsync();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result>0);
    }

    /// <summary>
    /// 无实体修改
    /// </summary>
    /// <param name="param">实体对象,必须包含Id</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Edit(string param)
    {
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }

        var hasId = dict.ContainsKey("Id");
        _ = hasId ? "" : throw new Exception("Id不存在！");
        var model = _dbProvider.DynamicBuilder().CreateObjectByType(_builderType, dict);
        var result = await _dbProvider.UpdateableByObject(model).ExecuteCommandAsync();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result>0);
    }

    /// <summary>
    /// 无实体删除
    /// </summary>
    /// <param name="param">实体对象,必须包含Id</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Del(string param)
    {
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, string>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }

        var hasId = dict.ContainsKey("Id");
        _ = hasId ? "" : throw new Exception("Id不存在！");
        var model = _dbProvider.DynamicBuilder().CreateObjectByType(_builderType, dict);
        var result = await _dbProvider.DeleteableByObject(model).ExecuteCommandAsync();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result>0);
    }

    /// <summary>
    /// List条件查询
    /// </summary>
    /// <param name="param">查询条件参数对象</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetList(Dictionary<string, string> param)
    {
        var query = _dbProvider.QueryableByObject(_builderType);
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                //{ 'Id_>':"1732568867353530368" }
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('_')[0], ConditionalType = GenWhereType(info.Key.Split('_')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var result = await query.ToListAsync();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result);
    }


    /// <summary>
    /// 分页List条件查询
    /// </summary>
    /// <param name="pageNum">页码</param>
    /// <param name="pageSize">每页数量</param>
    /// <param name="param">查询条件参数对象</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetPageList(int pageNum, int pageSize, Dictionary<string, string> param)
    {
        var query = _dbProvider.QueryableByObject(_builderType);
        //构造查询
        var where = new List<IConditionalModel>();
        //根据字典转成类对象         
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                //{ 'Id_>':"1732568867353530368" }
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('_')[0], ConditionalType = GenWhereType(info.Key.Split('_')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var totalCount = new RefAsync<int>();
        var result = await query.ToPageListAsync(pageNum, pageSize, totalCount);
        return RDto.R(HttpStatusCode.OK, "操作成功！", new PageDto{CurrentPage = pageNum,TotalPage =totalCount/pageSize, PageSize = pageSize,List = result});
    }

    /// <summary>
    /// 树形List条件查询
    /// </summary>
    /// <param name="param">查询条件参数对象</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetListTree(Dictionary<string, string> param)
    {
        var query = _dbProvider.QueryableByObject(_builderType);
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                //info.Value = Id  DESC | ASC
                query.OrderBy(info.Value);
            }
            else
            {
                //{ 'Id_>':"1732568867353530368" }
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('_')[0], ConditionalType = GenWhereType(info.Key.Split('_')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var result = await query.OrderBy("Id asc").ToTreeAsync("Children", "Pid", 0, "Id");
        return RDto.R(HttpStatusCode.OK, "操作成功！", result);
    }

    /// <summary>
    /// 按条件查询一条记录
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetOne(Dictionary<string, string> param)
    {
        var query = _dbProvider.QueryableByObject(_builderType);
        //构造查询
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            //{ 'Id_>':"1732568867353530368" }
            where.Add(new ConditionalModel
            {
                FieldName = info.Key.Split('_')[0], ConditionalType = GenWhereType(info.Key.Split('_')[1]),
                FieldValue = info.Value
            });
        }

        query.Where(where);
        var result = await query.FirstAsync();
        return RDto.R(HttpStatusCode.OK, "操作成功！", result);
    }

    /// <summary>
    /// 条件操作符转换
    /// </summary>
    /// <param name="typeCode"></param>
    /// <returns></returns>
    private ConditionalType GenWhereType(string typeCode)
    {
        ConditionalType type = ConditionalType.Equal;
        switch (typeCode)
        {
            case "==": //等于
                type = ConditionalType.Equal;
                break;
            case "!=": //不等于
                type = ConditionalType.NoEqual;
                break;
            case "%": //模糊查询
                type = ConditionalType.Like;
                break;
            case ">": //大于
                type = ConditionalType.GreaterThan;
                break;
            case ">=": //大于等于
                type = ConditionalType.GreaterThanOrEqual;
                break;
            case "<": //小于
                type = ConditionalType.LessThan;
                break;
            case "<=": //小于等于
                type = ConditionalType.LessThanOrEqual;
                break;
            case "in": //正确格式   X,Y,Z ,错误格式   'X','Y','z'
                type = ConditionalType.In;
                break;
            case "!in": //Not in操作 参数和in一样
                type = ConditionalType.NotIn;
                break;
            case "ll": //左模糊
                type = ConditionalType.LikeLeft;
                break;
            case "lr": //右模糊
                type = ConditionalType.LikeRight;
                break;
            case "null": //是null或者''
                type = ConditionalType.IsNullOrEmpty;
                break;
            case "=null": //value等于null 
                type = ConditionalType.EqualNull;
                break;
            case "not": // value不等于null
                type = ConditionalType.IsNot;
                break;
            case "noLike": //模糊查询取反
                type = ConditionalType.NoLike;
                break;
            case "inLike": //正确格式   X,Y,Z ,生在的Sql ：  ( id like '%X%' or id like '%Y%' or id like '%Z%')
                type = ConditionalType.InLike;
                break;
        }

        return type;
    }
}