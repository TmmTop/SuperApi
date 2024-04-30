using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Config;
using SuperApi.Enum;
using SuperApi.Model;
using SuperApi.SqlSugar;
using SuperApi.Utils;

namespace SuperApi.Service;
/// <summary>
/// 用户管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class UserService: BaseService<User>, IDynamicWebApi
{
    /// <summary>
    /// 用户管理服务
    /// </summary>
    /// <param name="db"></param>
    public UserService(Repository<User> db) : base(db)
    {
    }
    /// <summary>
    /// PC创建用户
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> AddPcUser([FromBody] User model)
    {
        var isHave = await Db.AsQueryable().Where(x => x.Account.Equals(model.Account)).AnyAsync();
        if (isHave)
        {
            throw new Exception("账号已存在！");
        }
        var cryptoType = ConfigProvider.Config["Cryptogram:CryptoType"]!;
        if (cryptoType == CryptogramEnum.MD5.ToString())
        {
            //默认密码
            model.Password = CryptogramUtil.Md5Encrypt("a88888888");
        }
        else
        {
            //默认密码
            model.Password = CryptogramUtil.Sm2Encrypt("a88888888");
        }
        return await Db.Add(model) > 0;
    }
}