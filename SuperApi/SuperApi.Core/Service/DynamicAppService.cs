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

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public DynamicAppService(IServiceProvider service, IConfiguration config)
    {
        _db = service.GetService<Repository<Tenant>>()!;
        _config = config;
    }

    /// <summary>
    /// 根据租户Id和TableId动态查询所有数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<JsonResult> GetList(long tableId)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var table = await _db.Change<Table>().AsQueryable().Where(x => x.Id == tableId).FirstAsync();
        var tableName = "";
        _ = table == null ? throw new Exception(ResponseMsgOption.NotTableId) : tableName = table.TableName;
        var propertys = await _db.Change<Field>().AsQueryable().Where(x => x.TableId == tableId).ToListAsync();
        var builder = _db.Context.DynamicBuilder();
        var builderType = builder.CreateClass(tableName, new SugarTable());
        var objDicts = new Dictionary<string, object>();
        foreach (var property in propertys)
        {
            if (property.FieldName == "Id" || property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
            {
                if (property.FieldName == "Id")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn()
                            { IsPrimaryKey = true, IsIdentity = false, ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, 0);
                }

                if (property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, DateTime.Now);
                }
            }
            else
            {
                if (property.FieldType == "varchar" || property.FieldType == "longtext")
                {
                    builderType.CreateProperty(property.FieldName, typeof(string),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, "");
                }

                if (property.FieldType == "long")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, 0);
                }

                if (property.FieldType == "int")
                {
                    builderType.CreateProperty(property.FieldName, typeof(int),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, 0);
                }

                if (property.FieldType == "decimal")
                {
                    builderType.CreateProperty(property.FieldName, typeof(decimal),
                        new SugarColumn() { ColumnDescription = property.FieldComment, DecimalDigits = 2 });
                    objDicts.Add(property.FieldName, 0);
                }

                if (property.FieldType == "float")
                {
                    builderType.CreateProperty(property.FieldName, typeof(float),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, 0);
                }

                if (property.FieldType == "datetime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, DateTime.Now);
                }

                if (property.FieldType == "bool")
                {
                    builderType.CreateProperty(property.FieldName, typeof(bool),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                    objDicts.Add(property.FieldName, false);
                }
            }
        }

        //创建类
        var type = builderType.BuilderType();
        //根据字典转成类对象         
        var value = builder.CreateObjectByType(type, objDicts);
        //设置主键Id=雪花ID
        type.GetProperty("Id")!.SetValue(value, SnowFlakeSingle.instance.NextId());
        type.GetProperty("Account")!.SetValue(value, "admin");
        var add = await _db.Context.InsertableByObject(value).ExecuteCommandAsync();
        var query = _db.Context.QueryableByObject(type);
        //构造查询
        var where = new List<IConditionalModel>();
        query.OrderBy("id");
        // where.Add(new ConditionalModel
        // {
        //     FieldName = "ID",
        //     FieldValue = ""
        // });
        query.Where(where);
        var result = await query.ToListAsync();
        return RDto.R(HttpStatusCode.OK, result);
    }
}