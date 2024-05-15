using SqlSugar;
using SuperApi.Enum;
using SuperApi.Model;

namespace SuperApi.SqlSugar.Seed;
/// <summary>
/// Seed部门
/// </summary>
public class DepartmentSeed
{
    /// <summary>
    /// Seed部门
    /// </summary>
    public static void Init(SqlSugarScope db)
    {
        var rows = new List<Department>
        {
            new Department()
            {
                Id = 1,
                Pid = 0,
                Name = "总公司",
                Code = "D1",
                Level =1,
                Status = StatusEnum.启用,
                CreateTime = new DateTime()
            },
            new Department()
            {
                Id = 2,
                Pid =1, 
                Name = "研发部",
                Code = "D2",
                Level =2,
                Status = StatusEnum.启用,
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