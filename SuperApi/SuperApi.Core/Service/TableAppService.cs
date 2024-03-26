namespace SuperApi.Core.Service;

/// <summary>
/// Table模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class TableAppService : IDynamicWebApi
{
    private readonly Repository<Table> _db;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public TableAppService(IServiceProvider service)
    {
        _db = service.GetService<Repository<Table>>()!;
    }

    /// <summary>
    /// 根据租户Id查询租户的所有数据表
    /// </summary>
    /// <param name="tenantId">租户ID</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpGet]
    public async Task<JsonResult> GetList(long tenantId)
    {
        _ = tenantId <= 0 ? throw new Exception(ResponseMsgOption.NotTenantId) : "";
        var result = await _db.AsQueryable().Where(x => x.TenantId == tenantId).ToListAsync();
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 根据租户Id分页查询租户的所有数据表
    /// </summary>
    /// <param name="page">页码</param>
    /// <param name="pageSize">页数</param>
    /// <param name="tenantId">租户ID</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpGet]
    public async Task<JsonResult> GetPage(int page, int pageSize, long tenantId)
    {
        _ = tenantId <= 0 ? throw new Exception(ResponseMsgOption.NotTenantId) : "";
        RefAsync<int> total = 0;
        var result = await _db.AsQueryable().Where(x => x.TenantId == tenantId).ToPageListAsync(page, pageSize, total);
        return RDto.R(HttpStatusCode.OK, new PageDto
        {
            List = result,
            CurrentPage = page,
            PageSize = pageSize,
            TotalPage = total
        });
    }

    /// <summary>
    /// 根据租户Id添加数据表，添加表后，将框架默认字段添加进filed表 BaseModel
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpPost]
    public async Task<JsonResult> Add([FromBody] Table model)
    {
        _ = model.TenantId <= 0 ? throw new Exception(ResponseMsgOption.NotTenantId) : "";
        _ = await _db.AsQueryable().Where(x => x.TenantId == model.TenantId && x.TableName.Equals(model.TableName))
            .CountAsync() > 0
            ? throw new Exception(ResponseMsgOption.HaveTenantTable)
            : "";
        var result = await _db.Add(model);
        if (result > 0)
        {
            var list = new List<Field>();
            list.Add(new Field
            {
                TableId = result,
                FieldName = "Id",
                FieldType = "long",
                FieldComment = "主键Id"
            });
            list.Add(new Field
            {
                TableId = result,
                FieldName = "CreateTime",
                FieldType = "datetime",
                FieldComment = "创建时间"
            });
            list.Add(new Field
            {
                TableId = result,
                FieldName = "UpdateTime",
                FieldType = "datetime",
                FieldComment = "修改时间"
            });
            await _db.Change<Field>().InsertRangeAsync(list);
            return RDto.R(HttpStatusCode.OK);
        }
        else
        {
            throw new Exception(ResponseMsgOption.OpAddFail);
        }
    }

    /// <summary>
    /// 根据租户Id修改数据表
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpPost]
    public async Task<JsonResult> Edit([FromBody] Table model)
    {
        _ = model.TenantId <= 0 ? throw new Exception(ResponseMsgOption.NotTenantId) : "";
        _ = await _db.AsQueryable().Where(x => x.TenantId == model.TenantId && x.TableName.Equals(model.TableName))
            .CountAsync() > 0
            ? throw new Exception(ResponseMsgOption.HaveTenantTable)
            : "";
        var result = await _db.Edit(model);
        return !result
            ? throw new Exception(ResponseMsgOption.OpEditFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 删除指定数据表 ，删除后需要把表对应的字段表数据删掉，用事务
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Del([FromBody] Table model)
    {
        try
        {
            using (var context = _db.Context.CreateContext()) //;默认带事务 CreateContext(IsTran=true)
            {
                var table = await _db.AsQueryable().Where(x => x.Id == model.Id)
                    .FirstAsync();
                _ = table == null ? throw new Exception("数据模型不存在！") : "";
                if (_db.Context.DbMaintenance.IsAnyTable(table.TableName, false))
                {
                    //把原表删掉
                    bool isOk = _db.Context.DbMaintenance.DropTable(table.TableName);
                    if (!isOk)
                    {
                        throw new Exception("旧表删除失败！");
                    }
                }

                var result = await _db.Del(model);
                if (result)
                {
                    await _db.Change<Field>().DeleteAsync(x => x.TableId == model.Id);
                }

                //这行不能少
                context.Commit(); //使用事务一定要记得写提交
                return !result
                    ? throw new Exception(ResponseMsgOption.OpDelFail)
                    : RDto.R(HttpStatusCode.OK);
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
}