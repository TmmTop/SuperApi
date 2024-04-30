using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 菜单管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class MenuService: BaseService<Menu>, IDynamicWebApi
{
    /// <summary>
    /// 菜单管理服务
    /// </summary>
    /// <param name="db"></param>
    public MenuService(Repository<Menu> db) : base(db)
    {
    }
}