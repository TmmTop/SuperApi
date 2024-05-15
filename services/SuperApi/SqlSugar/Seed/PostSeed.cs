using SqlSugar;
using SuperApi.Enum;
using SuperApi.Model;
using SuperApi.Utils;

namespace SuperApi.SqlSugar.Seed;
/// <summary>
/// Seed岗位
/// </summary>
public class PostSeed
{
    /// <summary>
    /// Seed岗位
    /// </summary>
    public static void Init(SqlSugarScope db)
    {
        var rows = new List<Post>
        {
            new Post()
            {
                Id = 1787361006931021824,
                Name = "全栈大神",
                Code = "P1",
                Status = StatusEnum.启用,
                CreateTime = new DateTime()
            },
            new Post()
            {
                Id = 1787361006931021825,
                Name = "菜鸡",
                Code = "P2",
                Status = StatusEnum.启用,
                CreateTime = new DateTime()
            }
        };
        var entityInfo = db.EntityMaintenance.GetEntityInfo(typeof(Post));
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