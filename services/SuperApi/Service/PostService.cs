using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SuperApi.Model;
using SuperApi.SqlSugar;

namespace SuperApi.Service;
/// <summary>
/// 职位管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class PostService: BaseService<Post>, IDynamicWebApi
{
    /// <summary>
    /// 职位管理服务
    /// </summary>
    /// <param name="db"></param>
    public PostService(Repository<Post> db) : base(db)
    {
    }
}