namespace SuperApi.Core.Service;

/// <summary>
/// 租户模块API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "v1")]
[DynamicWebApi]
public class TenantAppService : IDynamicWebApi
{
    private readonly Repository<Tenant> _db;
    private readonly IConfiguration _config;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public TenantAppService(IServiceProvider service, IConfiguration config)
    {
        _db = service.GetService<Repository<Tenant>>()!;
        _config = config;
    }

    /// <summary>
    /// 获取租户信息
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpGet]
    public async Task<JsonResult> GetPage(int page, int pageSize, Dictionary<string, string> param)
    {
        var result = await _db.Page(page, pageSize, param);
        return RDto.R(HttpStatusCode.OK, result);
    }

    /// <summary>
    /// 新增租户信息并新建库表以及库连接id
    /// 连接id会自动释放，无需手动
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Add([FromBody] Tenant model)
    {
        //默认密码
        var cryptoType = _config.GetSection("Cryptogram:CryptoType").Value!;
        if (cryptoType == CryptogramEnum.MD5.ToString())
        {
            model.Password = CryptogramUtil.Md5Encrypt("superApi");
        }
        else
        {
            model.Password = CryptogramUtil.SM2Encrypt("superApi");
        }

        var result = await _db.Add(model);
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpAddFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 修改租户信息
    /// 删除租户的数据库并新建库表
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Edit([FromBody] Tenant model)
    {
        var hasId = model.GetType().GetProperty("Id");
        if (hasId == null)
            throw new Exception(ResponseMsgOption.NotId);
        var result = await _db.AsUpdateable(model).IgnoreColumns(x => x.Password).ExecuteCommandAsync();
        return !(result > 0)
            ? throw new Exception(ResponseMsgOption.OpEditFail)
            : RDto.R(HttpStatusCode.OK);
    }

    /// <summary>
    /// 除租户信息
    /// 并删除租户的数据库
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<JsonResult> Del([FromBody] Tenant model)
    {
        var result = await _db.Del(model);
        return !result
            ? throw new Exception(ResponseMsgOption.OpDelFail)
            : RDto.R(HttpStatusCode.OK);
    }
}