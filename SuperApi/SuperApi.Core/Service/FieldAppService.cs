namespace SuperApi.Core.Service;

/// <summary>
/// Field模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class FieldAppService : IDynamicWebApi
{
    private readonly Repository<Field> _db;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public FieldAppService(IServiceProvider service)
    {
        _db = service.GetService<Repository<Field>>()!;
    }

    /// <summary>
    /// 根据表Id分页查询数据表的字段
    /// </summary>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    /// <param name="tableId"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpGet]
    public async Task<JsonResult> GetPage(int page, int pageSize, long tableId)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        RefAsync<int> total = 0;
        var result = await _db.AsQueryable().Where(x => x.TableId == tableId).ToPageListAsync(page, pageSize, total);
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 根据表Id查询数据表的字段
    /// </summary>
    /// <param name="tableId"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpGet]
    public async Task<JsonResult> GetList(long tableId)
    {
        _ = tableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var result = await _db.AsQueryable().Where(x => x.TableId == tableId).ToListAsync();
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 添加字段
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Add([FromBody] Field model)
    {
        _ = model.TableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var result = await _db.Add(model);
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpAddFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 根据表Id修改字段
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Edit([FromBody] Field model)
    {
        _ = model.TableId <= 0 ? throw new Exception(ResponseMsgOption.NotTableId) : "";
        var result = await _db.Edit(model);
        return !result
            ? throw new Exception(ResponseMsgOption.OpEditFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 根据表Id修改字段
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> SaveAll([FromBody] List<Field> models)
    {
        _ = models == null ? throw new Exception(ResponseMsgOption.NotTablesId) : "";
        _ = !models.Select(x => x.TableId <= 0).Any() ? throw new Exception(ResponseMsgOption.NotTablesId) : "";
        try
        {
            using (var context = _db.Context.CreateContext()) //;默认带事务 CreateContext(IsTran=true)
            {
                //删除表的所有字段，在新增
                foreach (var info in models)
                {
                    await _db.DeleteAsync(x => x.TableId == info.TableId);
                }

                var result = await _db.InsertOrUpdateAsync(models);
                context.Commit(); //提交事务
                return !result
                    ? throw new Exception(ResponseMsgOption.OpEditFail)
                    : RDto.R(HttpStatusCode.OK);
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ResponseMsgOption.OpEditFail);
        }
    }

    /// <summary>
    /// 根据表Id删除字段
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Del([FromBody] Field model)
    {
        var result = await _db.Del(model);
        return !result
            ? throw new Exception(ResponseMsgOption.OpDelFail)
            : RDto.R(HttpStatusCode.OK);
    }
}