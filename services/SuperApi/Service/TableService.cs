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
}