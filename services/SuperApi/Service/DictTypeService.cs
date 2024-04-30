using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 字典类型管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DictTypeService: BaseService<DictType>, IDynamicWebApi
{
    /// <summary>
    /// 字典类型管理服务
    /// </summary>
    /// <param name="db"></param>
    public DictTypeService(Repository<DictType> db) : base(db)
    {
    }
}