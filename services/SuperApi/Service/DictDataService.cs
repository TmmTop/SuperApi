using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 字典值管理服务管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DictDataService: BaseService<DictData>, IDynamicWebApi
{
    /// <summary>
    /// 字典值管理服务
    /// </summary>
    /// <param name="db"></param>
    public DictDataService(Repository<DictData> db) : base(db)
    {
    }
}