namespace SuperApi.Dto.Route;

/// <summary>
/// 前端路由基础结构
/// </summary>
public class Route
{
    /// <summary>
    /// 名称
    /// </summary>
    public string Name { get; set; } = "";

    /// <summary>
    /// 路径
    /// </summary>
    public string Path { get; set; } = "";

    /// <summary>
    /// 组件
    /// </summary>
    public string Component { get; set; } = "";

    /// <summary>
    /// 重定向
    /// </summary>
    public string Redirect { get; set; } = "";

    /// <summary>
    /// 自定义前端路由参数
    /// </summary>
    public Props Props { get; set; } = new Props();

    /// <summary>
    /// Meta
    /// </summary>
    public Meta Meta { get; set; } = new Meta();

    /// <summary>
    /// 子项
    /// </summary>
    public List<Route> Children { get; set; } = new List<Route>();
}

/// <summary>
/// 自定义前端路由参数
/// </summary>
public class Props
{
    /// <summary>
    /// 自定义跳转链接
    /// </summary>
    public string Url { get; set; } = "";
}

/// <summary>
/// 前端路由Meta结构
/// </summary>
public class Meta
{
    /// <summary>
    /// 标题
    /// </summary>
    public string Title { get; set; } = "";

    /// <summary>
    /// 国际化标题
    /// </summary>
    public string I18nKey { get; set; } = "";

    /// <summary>
    /// 图标
    /// Iconify 图标
    /// </summary>
    public string Icon { get; set; } = "";

    /// <summary>
    /// 是否为常量路由
    /// 无需登录，并且该路由在前端定义
    /// </summary>
    public bool Constant { get; set; } = false;

    /// <summary>
    /// 是否在菜单中隐藏该路由
    /// </summary>
    public bool HideInMenu { get; set; } = false;

    /// <summary>
    /// 是否缓存该路由
    /// </summary>
    public bool KeepAlive { get; set; } = false;

    /// <summary>
    /// 路由排序顺序
    /// </summary>
    public int Order { get; set; } = 0;

    /// <summary>
    /// 本地图标
    /// 存在于 "src/assets/svg-icon" 目录下，如果设置，将忽略icon属性
    /// </summary>
    public string LocalIcon { get; set; } = "";

    /// <summary>
    /// 是否内嵌
    /// </summary>
    public bool IsInner { get; set; }

    /// <summary>
    /// 内嵌外部链接
    /// 如果是目录 前端直接props.url赋值，如果是二级菜单则赋值meta.href
    /// </summary>
    public string Href { get; set; } = "";

    /// <summary>
    /// 是否固定到Tab
    /// 若值大于0，路由将在标签页中固定显示，其值表示固定标签页的顺序
    /// </summary>
    public int FixedIndexInTab { get; set; } = 0;
}