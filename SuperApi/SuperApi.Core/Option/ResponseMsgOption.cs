namespace SuperApi.Core.Option;

/// <summary>
/// 全局响应提示选项
/// </summary>
public static class ResponseMsgOption
{
    /// <summary>
    /// 操作成功
    /// </summary>
    public static readonly string OpSuccess = "操作成功！";

    /// <summary>
    /// 添加失败
    /// </summary>
    public static readonly string OpAddFail = "添加失败！";

    /// <summary>
    /// 修改失败
    /// </summary>
    public static readonly string OpEditFail = "修改失败！";

    /// <summary>
    /// 删除失败
    /// </summary>
    public static readonly string OpDelFail = "删除失败！";
    
    /// <summary>
    /// TableId不存在
    /// </summary>
    public static readonly string NotTableId= "TableId不存在！";
    /// <summary>
    /// NotTablesId
    /// </summary>
    public static readonly string NotTablesId= "数据集中的TableId不存在！";
    /// <summary>
    /// NotTenantId
    /// </summary>
    public static readonly string NotTenantId= "租户Id不存在！";
    /// <summary>
    /// HaveTenantTable
    /// </summary>
    public static readonly string HaveTenantTable= "租户表不能重复！";
    /// <summary>
    /// Id不存在
    /// </summary>
    public static readonly string NotId= "Id不存在！";
    /// <summary>
    /// 服务器异常
    /// </summary>
    public static readonly string ServerError= "服务器异常！";
}