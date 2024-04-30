using SqlSugar;
namespace SuperApi.Model;

/// <summary>
/// 角色菜单表
/// </summary>
[SugarTable(null, "角色菜单表")]
public class RoleMenu:Base
{
    /// <summary>
    /// 角色Id
    /// </summary>
    [SugarColumn(ColumnDescription = "角色Id")]
    public long RoleId { get; set; }

    /// <summary>
    /// 菜单Id
    /// </summary>
    [SugarColumn(ColumnDescription = "菜单Id")]
    public long MenuId { get; set; }

    /// <summary>
    /// 菜单
    /// </summary>
    [Newtonsoft.Json.JsonIgnore]
    [System.Text.Json.Serialization.JsonIgnore]
    [Navigate(NavigateType.OneToOne, nameof(MenuId))]
    public Menu Menu { get; set; } = new Menu();
}