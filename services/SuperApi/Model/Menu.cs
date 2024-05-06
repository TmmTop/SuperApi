using System.ComponentModel.DataAnnotations;
using SqlSugar;
using SuperApi.Enum;

namespace SuperApi.Model;

/// <summary>
/// 后台管理前端路由菜单表
/// </summary>
[SugarTable(null, "后台管理前端路由菜单表")]
[SugarIndex("index_{table}_T", nameof(Title), OrderByType.Asc)]
public class Menu : Base
{
    /// <summary>
    /// 父Id
    /// </summary>
    [SugarColumn(ColumnDescription = "父Id")]
    public long Pid { get; set; }
    
    /// <summary>
    /// 路由名称
    /// </summary>
    [SugarColumn(ColumnDescription = "路由名称", Length = 64)]
    [MaxLength(64)]
    public string? Name { get; set; }

    /// <summary>
    /// 路由地址
    /// </summary>
    [SugarColumn(ColumnDescription = "路由地址", Length = 128)]
    [MaxLength(128)]
    public string? Path { get; set; }

    /// <summary>
    /// 组件路径
    /// </summary>
    [SugarColumn(ColumnDescription = "组件路径", Length = 128)]
    [MaxLength(128)]
    public string? Component { get; set; }

    /// <summary>
    /// 重定向
    /// </summary>
    [SugarColumn(ColumnDescription = "重定向", Length = 128)]
    [MaxLength(128)]
    public string? Redirect { get; set; }
    
    /// <summary>
    /// 菜单名称
    /// </summary>
    [SugarColumn(ColumnDescription = "菜单名称", Length = 64)]
    [Required, MaxLength(64)]
    public string Title { get; set; } = "";

    /// <summary>
    /// 路由的国际化键值
    /// </summary>
    [SugarColumn(ColumnDescription = "路由的国际化键值", Length = 64)]
    [Required, MaxLength(64)]
    public string? I18nKey { get; set; } = "";

    /// <summary>
    /// 是否缓存
    /// </summary>
    [SugarColumn(ColumnDescription = "是否缓存")]
    public bool KeepAlive { get; set; } = true;

    /// <summary>
    /// 是否为常量路由
    /// 无需登录，并且该路由在前端定义
    /// </summary>
    [SugarColumn(ColumnDescription = "是否为常量路由")]
    public bool Constant { get; set; } = true;

    /// <summary>
    /// 图标
    /// </summary>
    [SugarColumn(ColumnDescription = "图标", Length = 128)]
    [MaxLength(128)]
    public string? Icon { get; set; }

    /// <summary>
    /// 本地图标
    /// 存在于 "src/assets/svg-icon" 目录下，如果设置，将忽略icon属性
    /// </summary>
    [SugarColumn(ColumnDescription = "图标", Length = 128)]
    [MaxLength(128)]
    public string? LocalIcon { get; set; }
    /// <summary>
    /// 内嵌跳转链接
    /// </summary>
    [SugarColumn(ColumnDescription = "内嵌跳转链接", Length = 256)]
    [MaxLength(256)]
    public string? InnerHref { get; set; }
    
    /// <summary>
    /// 外部跳转链接
    /// </summary>
    [SugarColumn(ColumnDescription = "外部跳转链接", Length = 256)]
    [MaxLength(256)]
    public string? Href { get; set; }

    /// <summary>
    /// 是否隐藏
    /// </summary>
    [SugarColumn(ColumnDescription = "是否隐藏")]
    public bool HideInMenu { get; set; }

    /// <summary>
    /// 是否固定到Tab
    /// 若值大于0，路由将在标签页中固定显示，其值表示固定标签页的顺序
    /// </summary>
    [SugarColumn(ColumnDescription = "是否固定到Tab")]
    public int FixedIndexInTab { get; set; } = 0;

    /// <summary>
    /// 排序
    /// </summary>
    [SugarColumn(ColumnDescription = "排序")]
    public int OrderNo { get; set; } = 100;

    /// <summary>
    /// 菜单子项
    /// </summary>
    [SugarColumn(IsIgnore = true)]
    public List<Menu> Children { get; set; } = new List<Menu>();
}