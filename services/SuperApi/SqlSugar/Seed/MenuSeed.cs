using SqlSugar;
using SuperApi.Enum;
using SuperApi.Model;

namespace SuperApi.SqlSugar.Seed;

/// <summary>
/// Seed菜单
/// </summary>
public class MenuSeed
{
    /// <summary>
    /// Seed菜单
    /// </summary>
    public static void Init(SqlSugarScope db)
    {
        var rows = new List<Menu>
        {
            new Menu()
            {
                Id = 1,
                Pid = 0,
                Name = "login",
                Path = "/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?",
                Component = "layout.blank$view.login",
                Redirect = null,
                Title = "login",
                I18nKey = "",
                KeepAlive = true,
                Constant = true,
                Icon = null,
                LocalIcon = null,
                Href = null,
                HideInMenu = true,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 2,
                Pid = 0,
                Name = "403",
                Path = "/403",
                Component = "layout.blank$view.403",
                Redirect = null,
                Title = "403",
                I18nKey = "",
                KeepAlive = true,
                Constant = true,
                Icon = null,
                LocalIcon = null,
                Href = null,
                HideInMenu = true,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 3,
                Pid = 0,
                Name = "404",
                Path = "/404",
                Component = "layout.blank$view.404",
                Redirect = null,
                Title = "404",
                I18nKey = "",
                KeepAlive = true,
                Constant = true,
                Icon = null,
                LocalIcon = null,
                Href = null,
                HideInMenu = true,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 4,
                Pid = 0,
                Name = "500",
                Path = "/500",
                Component = "layout.blank$view.500",
                Redirect = null,
                Title = "500",
                I18nKey = "",
                KeepAlive = true,
                Constant = true,
                Icon = null,
                LocalIcon = null,
                Href = null,
                HideInMenu = true,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 5,
                Pid = 0,
                Name = "home",
                Path = "/home",
                Component = "layout.base$view.home",
                Redirect = null,
                Title = "首页",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "mdi:monitor-dashboard",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 6,
                Pid = 0,
                Name = "manage",
                Path = "/manage",
                Component = "layout.base",
                Redirect = "/manage/menu",
                Title = "系统管理",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "carbon:cloud-service-management",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 7,
                Pid = 6,
                Name = "manage_menu",
                Path = "/manage/menu",
                Component = "view.manage_menu",
                Redirect = null,
                Title = "路由管理",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "material-symbols:route",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 8,
                Pid = 6,
                Name = "manage_user",
                Path = "/manage/user",
                Component = "view.manage_user",
                Redirect = null,
                Title = "用户管理",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "ic:round-manage-accounts",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 10,
                Pid = 0,
                Name = "dynamic",
                Path = "/dynamic",
                Component = "layout.base",
                Redirect = "/dynamic/database",
                Title = "动态API",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "ic:round-manage-accounts",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 1,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 11,
                Pid = 10,
                Name = "dynamic_database",
                Path = "/dynamic/database",
                Component = "view.dynamic_database",
                Redirect = null,
                Title = "数据模型",
                I18nKey = null,
                KeepAlive = true,
                Constant = false,
                Icon = "ic:round-manage-accounts",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790624866651738000,
                Pid = 0,
                Name = "about",
                Path = "/about",
                Component = "layout.base$view.about",
                Redirect = "",
                Title = "关于我们",
                I18nKey = "",
                KeepAlive = false,
                Constant = false,
                Icon = "fluent:book-information-24-regular",
                LocalIcon = null,
                Href = "",
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 3,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790587530110963700,
                Pid = 10,
                Name = "dynamic_api",
                Path = "/dynamic/api",
                Component = "view.dynamic_api",
                Redirect = " ",
                Title = "动态接口",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "ic:round-manage-accounts",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790667065116463000,
                Pid = 1790668852212928500,
                Name = "friend_swagger",
                Path = "/friend/swagger",
                Component = "view.iframe-page",
                Redirect = null,
                Title = "接口文档",
                I18nKey = "",
                KeepAlive = true,
                Constant = false,
                Icon = "hugeicons:api",
                LocalIcon = null,
                Href = "http://localhost:3000/swagger/index.html",
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790668512126177300,
                Pid = 1790668852212928500,
                Name = "friend_fast_crud",
                Path = "/friend_fast_crud",
                Component = "view.iframe-page",
                Redirect = null,
                Title = "FastCrud",
                I18nKey = "",
                KeepAlive = false,
                Constant = false,
                Icon = "arcticons:fasthub",
                LocalIcon = null,
                Href = "http://fast-crud.docmirror.cn/",
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790668852212928500,
                Pid = 0,
                Name = "friend",
                Path = "/friend",
                Component = "layout.base",
                Redirect = null,
                Title = "友情链接",
                I18nKey = "",
                KeepAlive = false,
                Constant = false,
                Icon = "hugeicons:api",
                LocalIcon = null,
                Href = null,
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 2,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790674975661887500,
                Pid = 1790668852212928500,
                Name = "friend_admin_net",
                Path = "/friend/admin_net",
                Component = "view.iframe-page",
                Redirect = null,
                Title = "AdminNet",
                I18nKey = "",
                KeepAlive = false,
                Constant = false,
                Icon = "arcticons:google-admin",
                LocalIcon = null,
                Href = "http://101.43.53.74:5005/dist/index.html#/",
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },

            new Menu()
            {
                Id = 1790675937948471300,
                Pid = 1790668852212928500,
                Name = "friend_sqlsugar",
                Path = "/friend/sqlsugar",
                Component = "view.iframe-page",
                Redirect = null,
                Title = "SqlSugar",
                I18nKey = "",
                KeepAlive = false,
                Constant = false,
                Icon = "hugeicons:tropical-storm-tracks-01",
                LocalIcon = null,
                Href = "https://www.donet5.com/Home/Doc",
                HideInMenu = false,
                FixedIndexInTab = 0,
                OrderNo = 0,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                CreateUserId = null,
                UpdateUserId = null,
                IsDelete = false
            },
        };
        var entityInfo = db.EntityMaintenance.GetEntityInfo(typeof(Department));
        if (entityInfo.Columns.Any(u => u.IsPrimarykey))
        {
            // 按主键进行批量增加和更新
            var storage = db.StorageableByObject(rows).ToStorage();
            storage.AsInsertable.ExecuteCommand();
            storage.AsUpdateable.ExecuteCommand();
        }
        else
        {
            // 无主键则只进行插入
            if (!db.Queryable(entityInfo.DbTableName, entityInfo.DbTableName).Any())
                db.InsertableByObject(rows).ExecuteCommand();
        }
    }
}