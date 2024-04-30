using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 部门管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class DepartmentService: BaseService<Department>, IDynamicWebApi
{
    /// <summary>
    /// 部门管理服务
    /// </summary>
    /// <param name="db"></param>
    public DepartmentService(Repository<Department> db) : base(db)
    {
    }
}