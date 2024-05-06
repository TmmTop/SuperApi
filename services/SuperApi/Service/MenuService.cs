using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Dto.Route;
using SuperApi.Model;
using SuperApi.SqlSugar;

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
    [HttpGet]
    [AllowAnonymous]
    public async Task<List<Dto.Route.Route>> GetConstRoutes()
    {
        var param = new Dictionary<string, object>();
        param.Add("constant~!=", true);
        var result = await GetUserRoutes(param);
        return result.Routes;
    }

    /// <summary>
    /// 获取用户拥有的前端路由数据
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [AllowAnonymous]
    public async Task<RouteMenuOutput> GetUserRoutes(Dictionary<string, object> param)
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
                        Url = child.InnerHref!
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
                        Href = child.Href!,
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
                    Url = menu.InnerHref!
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
                    Href = menu.Href!,
                    LocalIcon = menu.LocalIcon!,
                    FixedIndexInTab = menu.FixedIndexInTab,
                },
                Children = route.Children
            });
        }
        return result;
    }
}