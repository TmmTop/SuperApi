using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;

/// <summary>
/// 数据表管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class TableService : BaseService<Table>, IDynamicWebApi
{
    /// <summary>
    /// 数据表管理服务
    /// </summary>
    /// <param name="db"></param>
    public TableService(Repository<Table> db) : base(db)
    {
    }

    /// <summary>
    /// 根据租户Id添加数据表，添加表后，将框架默认字段添加进filed表 BaseModel
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [HttpPost]
    public async Task<bool> AddTable([FromBody] Table model)
    {
        _ = await Db.AsQueryable().Where(x => x.TableName.Equals(model.TableName))
            .CountAsync() > 0
            ? throw new Exception("数据表已存在")
            : "";
        var result = await Db.Add(model);
        if (result > 0)
        {
            var list = new List<Field>();
            list.Add(new Field
            {
                TableId = result,
                FieldName = "Id",
                FieldType = "long",
                FieldComment = "主键Id"
            });
            list.Add(new Field
            {
                TableId = result,
                FieldName = "CreateTime",
                FieldType = "datetime",
                FieldComment = "创建时间"
            });
            list.Add(new Field
            {
                TableId = result,
                FieldName = "UpdateTime",
                FieldType = "datetime",
                FieldComment = "修改时间"
            });
            return await Db.Change<Field>().InsertRangeAsync(list);
        }
        else
        {
            throw new Exception("添加失败");
        }
    }

    /// <summary>
    /// 删除指定数据表 ，删除后需要把表对应的字段表数据删掉
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> DelTable([FromBody] Table model)
    {
        var table = await Db.AsQueryable().Where(x => x.Id == model.Id)
            .FirstAsync();
        _ = table == null ? throw new Exception("数据模型不存在！") : "";
        if (Db.Context.DbMaintenance.IsAnyTable(table.TableName, false))
        {
            bool isOk = Db.Context.DbMaintenance.DropTable(table.TableName);
            if (!isOk)
            {
                throw new Exception("旧表删除失败！");
            }
        }
        var result = await Db.Del(model);
        if (result)
        {
            await Db.Change<Field>().DeleteAsync(x => x.TableId == model.Id);
        }
        return result;
    }
}