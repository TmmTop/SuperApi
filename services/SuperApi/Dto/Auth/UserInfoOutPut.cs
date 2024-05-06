namespace SuperApi.Dto.Auth;
/// <summary>
/// 用户登录返回用户信息结果
/// </summary>
public class UserInfoOutPut
{
    /// <summary>
    /// 登录用户ID
    /// </summary>
    public long UserId { get; set; } = 0;

    /// <summary>
    /// 登录账号
    /// </summary>
    public string Account { get; set; } = "";

    /// <summary>
    /// 授权角色列表
    /// </summary>
    public List<string> Roles { get; set; } = new List<string>();

    /// <summary>
    /// 授权按钮标识列表
    /// </summary>
    public List<string> Buttons { get; set; } = new List<string>();
}