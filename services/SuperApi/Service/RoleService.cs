using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 角色管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class RoleService : BaseService<Role>, IDynamicWebApi
{
    /// <summary>
    /// 角色管理服务
    /// </summary>
    /// <param name="db"></param>
    public RoleService(Repository<Role> db) : base(db)
    {
    }
}