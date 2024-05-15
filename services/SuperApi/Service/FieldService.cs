using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SqlSugar;
using SuperApi.Model;
using SuperApi.SqlSugar;
using SuperApi.Utils;

namespace SuperApi.Service;

/// <summary>
/// 数据字段表管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class FieldService : BaseService<Field>, IDynamicWebApi
{
    /// <summary>
    /// 数据字段表服务初始化
    /// </summary>
    /// <param name="db"></param>
    public FieldService(Repository<Field> db) : base(db)
    {
    }

    /// <summary>
    /// 根据表Id修改字段 字段保存后需要 迁移表结构
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> SaveAll(List<Field> models)
    {
        var tableId = models.First().TableId;
        _ = models == null ? throw new Exception("表字段数据不能为空") : "";
        _ = tableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var table = await Db.Change<Table>().AsQueryable().Where(x => x.Id == tableId)
            .FirstAsync();
        _ = table == null ? throw new Exception("数据表不存在！") : "";
        try
        {
            await Db.DeleteAsync(x => x.TableId == table.Id);
            if (Db.Context.DbMaintenance.IsAnyTable(table.TableName, false))
            {
                bool isOk = Db.Context.DbMaintenance.DropTable(table.TableName);
                if (!isOk)
                {
                    throw new Exception("数据表删除失败！");
                }
            }

            var result = await Db.InsertOrUpdateAsync(models);
            var propertyList =
                await Db.Change<Field>().AsQueryable().Where(x => x.TableId == table.Id).ToListAsync();
            GenTable(propertyList, table.TableName);
            return result;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    /// <summary>
    /// 根据表ID迁移表结构
    /// </summary>
    /// <param name="propertyList"></param>
    /// <param name="tableName"></param>
    /// <exception cref="Exception"></exception>
    private void GenTable(List<Field> propertyList, string tableName)
    {
        var builder = Db.Context.DynamicBuilder();
        var model = builder.CreateClass(tableName, new SugarTable());
        foreach (var property in propertyList)
        {
            if (property.FieldName == "Id")
            {
                model.CreateProperty(property.FieldName, typeof(long),
                    new SugarColumn()
                        { IsPrimaryKey = true, IsIdentity = false, ColumnDescription = property.FieldComment });
            }

            if (property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
            {
                model.CreateProperty(property.FieldName, typeof(DateTime),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "varchar" || property.FieldType == "longtext")
            {
                model.CreateProperty(property.FieldName, typeof(string),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "long")
            {
                model.CreateProperty(property.FieldName, typeof(long),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "long")
            {
                model.CreateProperty(property.FieldName, typeof(long),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "int")
            {
                model.CreateProperty(property.FieldName, typeof(int),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "decimal")
            {
                model.CreateProperty(property.FieldName, typeof(decimal),
                    new SugarColumn() { ColumnDescription = property.FieldComment, DecimalDigits = 2 });
            }

            if (property.FieldType == "float")
            {
                model.CreateProperty(property.FieldName, typeof(float),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "datetime")
            {
                model.CreateProperty(property.FieldName, typeof(DateTime),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }

            if (property.FieldType == "bool")
            {
                model.CreateProperty(property.FieldName, typeof(bool),
                    new SugarColumn() { ColumnDescription = property.FieldComment });
            }
        }

        Db.Context.CodeFirst.InitTables(model.BuilderType());
    }
}