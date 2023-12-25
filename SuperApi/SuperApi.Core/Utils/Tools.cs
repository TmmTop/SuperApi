namespace SuperApi.Core.Utils;

/// <summary>
/// 工具类
/// </summary>
public static class Tools
{
    /// <summary>
    /// 条件操作符转换
    /// </summary>
    /// <param name="typeCode"></param>
    /// <returns></returns>
    public static ConditionalType GenWhereType(string typeCode)
    {
        ConditionalType type = ConditionalType.Equal;
        switch (typeCode)
        {
            case "==": //等于
                type = ConditionalType.Equal;
                break;
            case "!=": //不等于
                type = ConditionalType.NoEqual;
                break;
            case "%": //模糊查询
                type = ConditionalType.Like;
                break;
            case ">": //大于
                type = ConditionalType.GreaterThan;
                break;
            case ">=": //大于等于
                type = ConditionalType.GreaterThanOrEqual;
                break;
            case "<": //小于
                type = ConditionalType.LessThan;
                break;
            case "<=": //小于等于
                type = ConditionalType.LessThanOrEqual;
                break;
            case "in": //正确格式   X,Y,Z ,错误格式   'X','Y','z'
                type = ConditionalType.In;
                break;
            case "!in": //Not in操作 参数和in一样
                type = ConditionalType.NotIn;
                break;
            case "ll": //左模糊
                type = ConditionalType.LikeLeft;
                break;
            case "lr": //右模糊
                type = ConditionalType.LikeRight;
                break;
            case "null": //是null或者''
                type = ConditionalType.IsNullOrEmpty;
                break;
            case "=null": //value等于null 
                type = ConditionalType.EqualNull;
                break;
            case "not": // value不等于null
                type = ConditionalType.IsNot;
                break;
            case "noLike": //模糊查询取反
                type = ConditionalType.NoLike;
                break;
            case "inLike": //正确格式   X,Y,Z ,生在的Sql ：  ( id like '%X%' or id like '%Y%' or id like '%Z%')
                type = ConditionalType.InLike;
                break;
        }

        return type;
    }
}