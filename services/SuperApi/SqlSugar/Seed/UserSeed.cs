using SqlSugar;
using SuperApi.Enum;
using SuperApi.Model;
using SuperApi.Utils;

namespace SuperApi.SqlSugar.Seed;

/// <summary>
/// Seed用户
/// </summary>
public class UserSeed
{
    /// <summary>
    /// Seed用户
    /// </summary>
    public static void Init(SqlSugarScope db)
    {
        var encryptPassword = CryptogramUtil.Encrypt("sp123456");
        var rows = new List<User>
        {
            new User()
            {
                AccountType = AccountTypeEnum.SuperAdmin,
                Account = "admin",
                Password = encryptPassword,
                NickName = "超级管理员",
                RealName = "超级管理员",
                Phone = "13000000000",
                Avatar = "",
                Birthday = DateTime.Parse("2000-01-01"),
                Sex = GenderEnum.Male,
                Age = 30,
                Nation = "汉族",
                Email = "490912587@qq.com",
                PosId = 0,
                DepartId = 0,
                IsExpire = StatusEnum.Disable
            }
        };
        var entityInfo = db.EntityMaintenance.GetEntityInfo(typeof(User));
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