using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Dto;
using SuperApi.SqlSugar;

namespace SuperApi.Service;


/// <summary>
/// API服务基类 
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public abstract class BaseService<T> where T : class, new()
{
    /// <summary>
    /// 仓储实例
    /// </summary>
    protected readonly Repository<T> Db;

    /// <summary>
    /// API服务基类
    /// </summary>
    /// <param name="db"></param>
    protected BaseService(Repository<T> db)
    {
        Db = db;
    }

    /// <summary>
    /// 获取分页数据
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<Page> Page(int page, int pageSize, Dictionary<string, string> param)
    {
        return await Db.Page(page, pageSize, param);
    }

    /// <summary>
    /// 获取列表
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IEnumerable<T>> List(Dictionary<string, string> param)
    {
        return await Db.List(param);
    }

    /// <summary>
    /// 获取树形列表
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IEnumerable<T>> Tree(Dictionary<string, string> param)
    {
        return await Db.TreeList(param);
    }

    /// <summary>
    /// 获取单条数据
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<T> One(Dictionary<string, string> param)
    {
        return await Db.One(param);
    }

    /// <summary>
    /// 添加
    /// </summary>
    /// <param name="model">实体对象</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> Add(T model)
    {
        return await Db.Add(model) > 0;
    }

    /// <summary>
    /// 修改
    /// </summary>
    /// <param name="model">实体对象,必须包含Id</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> Edit(T model)
    {
        return await Db.Edit(model);
    }

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="model">实体对象,必须包含Id</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> Del(T model)
    {
        return await Db.Del(model);
    }
    /// <summary>
    /// 批量删除
    /// </summary>
    /// <param name="ids">要删除的id数组</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<bool> DelBatch(long[] ids)
    {
        return await Db.DelBatch(ids);
    }
}