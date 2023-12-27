namespace SuperApi.Core.Service;

/// <summary>
/// 动态API模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class DynamicAppService : IDynamicWebApi
{
    private readonly Repository<Tenant> _db;
    private readonly IConfiguration _config;
    private readonly DynamicBuilder _builder;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public DynamicAppService(IServiceProvider service, IConfiguration config)
    {
        _db = service.GetService<Repository<Tenant>>()!;
        _config = config;
        _builder = _db.Context.DynamicBuilder();
    }

    /// <summary>
    /// 根据TableId以及条件参数动态查询列表数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<JsonResult> GetList(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
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
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 根据TableId以及条件参数动态查询分页数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="pageNum">页码</param>
    /// <param name="pageSize">每页数量</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<JsonResult> GetPage(long tableId, int pageNum, int pageSize, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
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
        var totalCount = new RefAsync<int>();
        var result = await query.ToPageListAsync(pageNum, pageSize, totalCount);
        return RDto.R(HttpStatusCode.OK,
            new PageDto
            {
                CurrentPage = pageNum, TotalPage = totalCount / pageSize, PageSize = pageSize, List = result
            });
    }

    /// <summary>
    /// 根据TableId和父级属性名称以及条件参数动态查询Tree数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="parentPropertyName">父级属性名称</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<JsonResult> GetTree(long tableId, string parentPropertyName, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
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
        var result = await query.OrderBy("Id asc").ToTreeAsync("Children", parentPropertyName, 0, "Id");
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 根据TableId和条件参数动态查询一条数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<JsonResult> GetOne(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
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
        var result = await query.FirstAsync();
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 根据TableId和参数动态添加一条记录
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<JsonResult> Add(long tableId, string param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }

        var type = await GenDynamicType(tableId);
        //根据字典转成类对象  
        var value = _builder.CreateObjectByType(type, dict);
        // //设置主键Id=雪花ID
        // type.GetProperty("Id")!.SetValue(value, SnowFlakeSingle.instance.NextId());
        var result = await _db.Context.UpdateableByObject(value).ExecuteCommandAsync();
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpAddFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 根据TableId和参数动态修改一条记录
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<JsonResult> Edit(long tableId, string param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }

        var type = await GenDynamicType(tableId);
        //根据字典转成类对象  
        var value = _builder.CreateObjectByType(type, dict);
        var result = await _db.Context.UpdateableByObject(value).ExecuteCommandAsync();
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpEditFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 根据TableId和参数动态删除一条记录
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<JsonResult> Del(long tableId, string param)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var dict = new Dictionary<string, object>();
        var paramDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(param);
        foreach (var info in paramDict!)
        {
            dict.Add(info.Key, info.Value);
        }

        var hasId = dict.ContainsKey("Id");
        _ = hasId ? "" : throw new Exception("Id不存在！");
        var type = await GenDynamicType(tableId);
        //根据字典转成类对象  
        var value = _builder.CreateObjectByType(type, dict);
        var result = await _db.Context.DeleteableByObject(value).ExecuteCommandAsync();
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpAddFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 根据表id构建实体类
    /// </summary>
    /// <param name="tableId"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    private async Task<Type> GenDynamicType(long tableId)
    {
        var propertys = await _db.Change<Field>().AsQueryable().Where(x => x.TableId == tableId).ToListAsync();
        var table = await _db.Change<Table>().AsQueryable().Where(x => x.Id == tableId).FirstAsync();
        var tableName = "";
        _ = table == null ? throw new Exception(ResponseMsgOption.NotTableId) : tableName = table.TableName;
        var builderType = _builder.CreateClass(tableName, new SugarTable());
        foreach (var property in propertys)
        {
            if (property.FieldName == "Id" || property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
            {
                if (property.FieldName == "Id")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn()
                            { IsPrimaryKey = true, IsIdentity = false, ColumnDescription = property.FieldComment });
                }

                if (property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }
            }
            else
            {
                if (property.FieldType == "varchar" || property.FieldType == "longtext")
                {
                    builderType.CreateProperty(property.FieldName, typeof(string),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "long")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "int")
                {
                    builderType.CreateProperty(property.FieldName, typeof(int),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "decimal")
                {
                    builderType.CreateProperty(property.FieldName, typeof(decimal),
                        new SugarColumn() { ColumnDescription = property.FieldComment, DecimalDigits = 2 });
                }

                if (property.FieldType == "float")
                {
                    builderType.CreateProperty(property.FieldName, typeof(float),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "datetime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "bool")
                {
                    builderType.CreateProperty(property.FieldName, typeof(bool),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }
            }
        }

        return builderType.BuilderType();
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