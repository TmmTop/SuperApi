using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SqlSugar;
using SuperApi.Dto;
using SuperApi.Model;
using SuperApi.SqlSugar;
using SuperApi.Utils;

namespace SuperApi.Service;

/// <summary>
/// 动态API服务 
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DynamicService : IDynamicWebApi
{
    private readonly Repository<User> _db;
    private readonly DynamicBuilder _builder;

    /// <summary>
    /// 租户模块API服务实例
    /// </summary>
    /// <param name="service"></param>
    public DynamicService(IServiceProvider service)
    {
        _db = service.GetService<Repository<User>>()!;
        _builder = _db.Context.DynamicBuilder();
    }

    /// <summary>
    /// 根据TableId以及条件参数动态查询列表数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<object> GetList(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                query.OrderBy(info.Value);
            }
            else
            {
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('~')[0],
                    ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var result = await query.ToListAsync();
        return result;
    }

    /// <summary>
    /// 根据TableId以及条件参数动态查询分页数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<object> GetPage(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        _ = !param.Any(x => x.Key == "pageNum") ? throw new Exception("请输入参数pageNum") : "";
        _ = !param.Any(x => x.Key == "pageSize") ? throw new Exception("请输入参数pageSize") : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key != "pageSize" && info.Key != "pageNum")
            {
                if (info.Key == "Order")
                {
                    query.OrderBy(info.Value);
                }
                else
                {
                    where.Add(new ConditionalModel
                    {
                        FieldName = info.Key.Split('~')[0],
                        ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                        FieldValue = info.Value
                    });
                }
            }
        }

        query.Where(where);
        var totalCount = new RefAsync<int>();
        var pageNum = Convert.ToInt32(param["pageNum"]);
        var pageSize = Convert.ToInt32(param["pageSize"]);
        var result = await query.ToPageListAsync(pageNum, pageSize, totalCount);
        return new
        {
            CurrentPage = pageNum, TotalPage = totalCount, PageSize = pageSize, List = result
        };
    }

    /// <summary>
    /// 根据TableId和父级属性名称以及条件参数动态查询Tree数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<object> GetTree(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        _ = !param.Any(x => x.Key == "parentIdName") ? throw new Exception("请输入参数父级ID字段名称") : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                query.OrderBy(info.Value);
            }
            else
            {
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('~')[0],
                    ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var result = await query.OrderBy("Id asc").ToTreeAsync("Children", param["parentIdName"], 0, "Id");
        return result;
    }

    /// <summary>
    /// 根据TableId和条件参数动态查询一条数据
    /// </summary>
    /// <param name="tableId">表ID</param>
    /// <param name="param">条件参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpGet]
    public async Task<object> GetOne(long tableId, Dictionary<string, string> param)
    {
        _ = tableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var type = await GenDynamicType(tableId);
        var query = _db.Context.QueryableByObject(type);
        var where = new List<IConditionalModel>();
        foreach (var info in param)
        {
            if (info.Key == "Order")
            {
                query.OrderBy(info.Value);
            }
            else
            {
                where.Add(new ConditionalModel
                {
                    FieldName = info.Key.Split('~')[0],
                    ConditionalType = SqlSugarUtil.GenWhereType(info.Key.Split('~')[1]),
                    FieldValue = info.Value
                });
            }
        }

        query.Where(where);
        var result = await query.FirstAsync();
        return result;
    }

    /// <summary>
    /// 根据数据表id和其他参数动态添加一条记录
    /// </summary>
    /// <param name="param">参数</param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<bool> Add(DyDto param)
    {
        _ = param.TableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var dict = new Dictionary<string, object>();
        var paramDict = param.Param;
        foreach (var info in paramDict)
        {
            dict.Add(info.Key, info.Value);
        }

        var type = await GenDynamicType(param.TableId);
        var value = _builder.CreateObjectByType(type, dict);
        type.GetProperty("Id")!.SetValue(value, SnowFlakeSingle.instance.NextId());
        type.GetProperty("CreateTime")!.SetValue(value, DateTime.Now);
        type.GetProperty("UpdateTime")!.SetValue(value, DateTime.Now);
        var result = await _db.Context.InsertableByObject(value).ExecuteCommandAsync();
        return (result > 0);
    }

    /// <summary>
    /// 根据TableId和参数动态修改一条记录
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<bool> Edit(DyDto param)
    {
        _ = param.TableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var dict = new Dictionary<string, object>();
        var paramDict = param.Param;
        foreach (var info in paramDict)
        {
            dict.Add(info.Key, info.Value);
        }

        var type = await GenDynamicType(param.TableId);
        var value = _builder.CreateObjectByType(type, dict);
        type.GetProperty("CreateTime")!.SetValue(value, DateTime.Now);
        type.GetProperty("UpdateTime")!.SetValue(value, DateTime.Now);
        var result = await _db.Context.UpdateableByObject(value).ExecuteCommandAsync();
        return (result > 0);
    }

    /// <summary>
    /// 根据TableId和参数动态删除一条记录
    /// </summary>
    /// <param name="param"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    [AllowAnonymous]
    [HttpPost]
    public async Task<bool> Del(DyDto param)
    {
        _ = param.TableId <= 0 ? throw new Exception("数据表ID不能为空") : "";
        var dict = new Dictionary<string, object>();
        var paramDict = param.Param;
        foreach (var info in paramDict)
        {
            dict.Add(info.Key, info.Value);
        }

        var hasId = dict.ContainsKey("id");
        _ = hasId ? "" : throw new Exception("Id不存在！");
        var type = await GenDynamicType(param.TableId);
        var value = _builder.CreateObjectByType(type, dict);
        var result = await _db.Context.DeleteableByObject(value).ExecuteCommandAsync();
        return (result > 0);
    }

    /// <summary>
    /// 根据表id构建实体类
    /// </summary>
    /// <param name="tableId"></param>
    /// <returns></returns>
    /// <exception cref="Exception"></exception>
    private async Task<Type> GenDynamicType(long tableId)
    {
        var fileIds = await _db.Change<Field>().AsQueryable().Where(x => x.TableId == tableId).ToListAsync();
        var table = await _db.Change<Table>().AsQueryable().Where(x => x.Id == tableId).FirstAsync();
        var tableName = "";
        _ = table == null ? throw new Exception("数据表ID不能为空") : tableName = table.TableName;
        var builderType = _builder.CreateClass(tableName, new SugarTable());
        foreach (var property in fileIds)
        {
            if (property.FieldName == "Id" || property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
            {
                if (property.FieldName == "Id")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn()
                            { IsPrimaryKey = true, IsIdentity = false, ColumnDescription = property.FieldComment });
                }

                if (property.FieldName == "CreateTime" || property.FieldName == "UpdateTime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }
            }
            else
            {
                if (property.FieldType == "varchar" || property.FieldType == "longtext")
                {
                    builderType.CreateProperty(property.FieldName, typeof(string),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "long")
                {
                    builderType.CreateProperty(property.FieldName, typeof(long),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "int")
                {
                    builderType.CreateProperty(property.FieldName, typeof(int),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "decimal")
                {
                    builderType.CreateProperty(property.FieldName, typeof(decimal),
                        new SugarColumn() { ColumnDescription = property.FieldComment, DecimalDigits = 2 });
                }

                if (property.FieldType == "float")
                {
                    builderType.CreateProperty(property.FieldName, typeof(float),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "datetime")
                {
                    builderType.CreateProperty(property.FieldName, typeof(DateTime),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }

                if (property.FieldType == "bool")
                {
                    builderType.CreateProperty(property.FieldName, typeof(bool),
                        new SugarColumn() { ColumnDescription = property.FieldComment });
                }
            }
        }

        return builderType.BuilderType();
    }
}