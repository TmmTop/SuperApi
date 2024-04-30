using System.ComponentModel.DataAnnotations;
using SqlSugar;
using SuperApi.Enum;

namespace SuperApi.Model;

/// <summary>
/// 访问日志表
/// </summary>
[SugarTable(null, "访问日志表")]
[SugarIndex("index_{table}_A", nameof(Account), OrderByType.Asc)]
[SugarIndex("index_{table}_L", nameof(OpLogType), OrderByType.Asc)]
public class OpLog : Base
{
    /// <summary>
    /// 请求方式
    /// </summary>
    [SugarColumn(ColumnDescription = "请求方式", Length = 32)]
    [MaxLength(32)]
    public string? HttpMethod { get; set; }

    /// <summary>
    /// 请求地址
    /// </summary>
    [SugarColumn(ColumnDescription = "请求地址", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? RequestUrl { get; set; }

    /// <summary>
    /// 请求参数
    /// </summary>
    [SugarColumn(ColumnDescription = "请求参数", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? RequestParam { get; set; }

    /// <summary>
    /// 返回结果
    /// </summary>
    [SugarColumn(ColumnDescription = "返回结果", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? ReturnResult { get; set; }

    /// <summary>
    /// 日志消息Json
    /// </summary>
    [SugarColumn(ColumnDescription = "日志消息Json", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? Message { get; set; }

    /// <summary>
    /// 操作日志类型
    /// </summary>
    [SugarColumn(ColumnDescription = "操作日志类型")]
    public OpLogTypeEnum? OpLogType { get; set; } = OpLogTypeEnum.Default;

    /// <summary>
    /// IP地址
    /// </summary>
    [SugarColumn(ColumnDescription = "IP地址", Length = 256)]
    [MaxLength(256)]
    public string? RemoteIp { get; set; }

    /// <summary>
    /// 登录地点
    /// </summary>
    [SugarColumn(ColumnDescription = "登录地点", Length = 128)]
    [MaxLength(128)]
    public string? Location { get; set; }

    /// <summary>
    /// 经度
    /// </summary>
    [SugarColumn(ColumnDescription = "经度")]
    public double? Longitude { get; set; }

    /// <summary>
    /// 维度
    /// </summary>
    [SugarColumn(ColumnDescription = "维度")]
    public double? Latitude { get; set; }

    /// <summary>
    /// 浏览器标识
    /// </summary>
    [SugarColumn(ColumnDescription = "浏览器标识", Length = 1024)]
    [MaxLength(1024)]
    public string? Browser { get; set; }

    /// <summary>
    /// 操作系统
    /// </summary>
    [SugarColumn(ColumnDescription = "操作系统", Length = 256)]
    [MaxLength(256)]
    public string? Os { get; set; }

    /// <summary>
    /// 终端固件
    /// </summary>
    [SugarColumn(ColumnDescription = "终端固件", Length = 256)]
    [MaxLength(256)]
    public string? Platform { get; set; }

    /// <summary>
    /// 账号
    /// </summary>
    [SugarColumn(ColumnDescription = "账号", Length = 32)]
    [MaxLength(32)]
    public string? Account { get; set; }
}