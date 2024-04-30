using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// DIY节点管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DiyNodeService: BaseService<Table>, IDynamicWebApi
{
    /// <summary>
    /// DIY节点管理服务
    /// </summary>
    /// <param name="db"></param>
    public DiyNodeService(Repository<Table> db) : base(db)
    {
    }
}