using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SqlSugar;
using SuperApi.Dto.Route;
using SuperApi.Model;
using SuperApi.SqlSugar;
using SuperApi.Utils;

namespace SuperApi.Service;

/// <summary>
/// 菜单管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class MenuService : BaseService<Menu>, IDynamicWebApi
{
    /// <summary>
    /// 菜单管理服务
    /// </summary>
    /// <param name="db"></param>
    public MenuService(Repository<Menu> db) : base(db)
    {
    }

    /// <summary>
    /// 获取前端基路由数据
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpGet]
    public async Task<List<Dto.Route.Route>> GetConstRoutes()
    {
        var param = new Dictionary<string, string>();
        var result = await GetUserRoutes(param);
        return result.Routes.Where(x=>x.Meta.Constant).ToList();
    }
    /// <summary>
    /// 获取用户拥有的前端路由数据
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<RouteMenuOutput> GetUserRoutes(Dictionary<string, string> param)
    {
        var result = new RouteMenuOutput();
        result.Home = "home";
        var menus = await Db.TreeList(param);
        foreach (var menu in menus)
        {
            var route = new Dto.Route.Route();
            foreach (var child in menu.Children)
            {
                route.Children.Add(new Dto.Route.Route
                {
                    Name = child.Name!,
                    Component = child.Component!,
                    Path = child.Path!,
                    Props=new Props
                    {
                        Url = child.Href!
                    },
                    Meta = new Meta
                    {
                        Title = child.Title,
                        KeepAlive = child.KeepAlive,
                        Constant = child.Constant,
                        Icon = child.Icon!,
                        HideInMenu = child.HideInMenu,
                        I18nKey = child.I18nKey!,
                        Order = child.OrderNo,
                        LocalIcon = child.LocalIcon!,
                        FixedIndexInTab = child.FixedIndexInTab,
                    }
                });
            }
            result.Routes.Add(new Dto.Route.Route
            {
                Name = menu.Name!,
                Component = menu.Component!,
                Path = menu.Path!,
                Redirect = menu.Redirect!,
                Props=new Props
                {
                    Url = menu.Href!
                },
                Meta = new Meta
                {
                    Title = menu.Title,
                    KeepAlive = menu.KeepAlive,
                    Constant = menu.Constant,
                    Icon = menu.Icon!,
                    HideInMenu = menu.HideInMenu,
                    I18nKey = menu.I18nKey!,
                    Order = menu.OrderNo,
                    LocalIcon = menu.LocalIcon!,
                    FixedIndexInTab = menu.FixedIndexInTab,
                },
                Children = route.Children
            });
        }
        return result;
    }

    /// <summary>
    /// 获取路由菜单树
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<IEnumerable<Menu>> MenuTreeList(Dictionary<string, string> param)
    {
        var query = Db.Context.Queryable<Menu>();
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Group")
            {
                query.GroupBy(info.Value);
            }

            if (info.Key == "Order")
            {
                query.OrderBy(info.Value);
            }
            else
            {
                if (info.Key.Split('~').Length > 1)
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                        FieldValue = info.Value
                    });
                }
            }
        }
        string? childPropertyName = "Children";
        string? parentIdPropertyName = "Pid";
        int? rootValue = 0;
        string? primaryKeyPropertyName = "Id";
        var result = await query
            .Where(where)
            .Where(x=>!x.Constant)
            .ToTreeAsync(childPropertyName, parentIdPropertyName, rootValue, primaryKeyPropertyName);
        return result;
    }
}