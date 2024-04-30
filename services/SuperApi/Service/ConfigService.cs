using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 系统参数配置
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class ConfigService: BaseService<SuperApi.Model.Config>, IDynamicWebApi
{
    /// <summary>
    /// 数据表管理服务初始化
    /// </summary>
    /// <param name="db"></param>
    public ConfigService(Repository<SuperApi.Model.Config> db) : base(db)
    {
    }
}