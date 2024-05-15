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
                Name = "总公司",
  
                CreateTime = new DateTime()
            },
            new Menu()
            {
                Id = 2,
                Pid =1, 
                Name = "研发部",
              
                CreateTime = new DateTime()
            }
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