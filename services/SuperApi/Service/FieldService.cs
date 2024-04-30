using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

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
}