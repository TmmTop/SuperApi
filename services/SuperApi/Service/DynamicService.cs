using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SqlSugar;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;

/// <summary>
/// 动态API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DynamicService : IDynamicWebApi
{
    private readonly Repository<User> _db;
    private readonly IConfiguration _config;
    private readonly DynamicBuilder _builder;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    /// <param name="config"></param>
    public DynamicService(IServiceProvider service, IConfiguration config)
    {
        _db = service.GetService<Repository<User>>()!;
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
        return null;
    }
}