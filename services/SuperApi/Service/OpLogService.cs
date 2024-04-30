using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 日志管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class OpLogService: BaseService<OpLog>, IDynamicWebApi
{
    /// <summary>
    /// 日志管理服务
    /// </summary>
    /// <param name="db"></param>
    public OpLogService(Repository<OpLog> db) : base(db)
    {
    }
}