using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using SqlSugar;
using SuperApi.Config;
using SuperApi.Enum;
using SuperApi.Model;
using SuperApi.Utils;

namespace SuperApi.Service;
/// <summary>
/// 公共服务接口
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class CommonService : IDynamicWebApi
{
    private readonly IHttpContextAccessor _ctx;
    private readonly IWebHostEnvironment _env;

    /// <summary>
    /// 路径
    /// </summary>
    private readonly string _path = ConfigProvider.Config["Upload:Path"]!;

    /// <summary>
    /// 大小
    /// </summary>
    private readonly long _maxSize = Convert.ToInt64(ConfigProvider.Config["Upload:MaxSize"]!);

    /// <summary>
    /// 上传格式
    /// </summary>
    private List<string> _contentType = new List<string>
    {
        "image/jpg", "image/png", "image/jpeg", "image/gif", "image/bmp", "text/plain", "application/pdf",
        "application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "video/mp4"
    };


    /// <summary>
    /// 文件管理（上传，下载）
    /// </summary>
    /// <param name="ctx"></param>
    /// <param name="env"></param>
    public CommonService(IHttpContextAccessor ctx, IWebHostEnvironment env)
    {
        _ctx = ctx;
        _env = env;
    }
    /// <summary>
    /// 上传文件
    /// </summary>
    /// <param name="file"></param>
    /// <param name="path"></param>
    /// <returns></returns>
    [AllowAnonymous]
    public async Task<Files> UploadFile([Required] IFormFile file, [FromQuery] string? path = "Upload")
    {
        return await HandleUploadFile(file, path);
    }

    /// <summary>
    /// 上传文件Base64
    /// </summary>
    /// <param name="strBase64"></param>
    /// <param name="fileName"></param>
    /// <param name="contentType"></param>
    /// <param name="path"></param>
    /// <returns></returns>
    private async Task<Files> UploadFileFromBase64(string strBase64, string fileName, string contentType,
        string? path)
    {
        byte[] fileData = Convert.FromBase64String(strBase64);
        var ms = new MemoryStream();
        ms.Write(fileData);
        ms.Seek(0, SeekOrigin.Begin);
        if (string.IsNullOrEmpty(fileName))
            fileName = $"{SnowFlakeSingle.Instance.NextId()}.jpg";
        if (string.IsNullOrEmpty(contentType))
            contentType = "image/jpg";
        IFormFile formFile = new FormFile(ms, 0, fileData.Length, "file", fileName)
        {
            Headers = new HeaderDictionary(),
            ContentType = contentType
        };
        return await UploadFile(formFile, path);
    }

    /// <summary>
    /// 上传多文件
    /// </summary>
    /// <param name="files"></param>
    /// <returns></returns>
    public async Task<List<Files>> UploadFiles([Required] List<IFormFile> files)
    {
        var filelist = new List<Files>();
        foreach (var file in files)
        {
            filelist.Add(await UploadFile(file, ""));
        }

        return filelist;
    }

    /// <summary>
    /// 上传文件
    /// </summary>
    /// <param name="file">文件</param>
    /// <param name="savePath">路径</param>
    /// <returns></returns>
    private async Task<Files> HandleUploadFile(IFormFile file, string savePath)
    {
        if (file == null) throw new Exception(EnumUtil.ToDescription(ErrorCodeEnum.D8000));

        // 判断是否重复上传的文件
        var sizeKb = (long)(file.Length / 1024.0); // 大小KB
        var fileMd5 = string.Empty;
        var path = savePath;
        if (string.IsNullOrWhiteSpace(savePath))
        {
            path = _path;
            var reg = new Regex(@"(\{.+?})");
            var match = reg.Matches(path);
            match.ToList().ForEach(a =>
            {
                var str = DateTime.Now.ToString(a.ToString().Substring(1, a.Length - 2)); // 每天一个目录
                path = path.Replace(a.ToString(), str);
            });
        }

        if (!_contentType.Contains(file.ContentType))
            throw new Exception(EnumUtil.ToDescription(ErrorCodeEnum.D8001));

        if (sizeKb > _maxSize)
            throw new Exception(EnumUtil.ToDescription(ErrorCodeEnum.D8002));

        var suffix = Path.GetExtension(file.FileName).ToLower(); // 后缀
        if (string.IsNullOrWhiteSpace(suffix))
            throw new Exception(EnumUtil.ToDescription(ErrorCodeEnum.D8003));

        var newFile = new Files
        {
            Id = SnowFlakeSingle.Instance.NextId(),
            BucketName = "Local",
            FileName = Path.GetFileNameWithoutExtension(file.FileName),
            Suffix = suffix,
            SizeKb = sizeKb.ToString(),
            FilePath = path,
            FileMd5 = fileMd5,
        };

        var finalName = newFile.Id + suffix; // 文件最终名称
        newFile.Provider = ""; // 本地存储 Provider 显示为空
        var filePath = Path.Combine(_env.WebRootPath, path);
        if (!Directory.Exists(filePath))
            Directory.CreateDirectory(filePath);

        var realFile = Path.Combine(filePath, finalName);
        using (var stream = File.Create(realFile))
        {
            await file.CopyToAsync(stream);
        }

        // 生成外链
        var host = CommonUtil.GetLocalhost(_ctx.HttpContext!);
        if (!host.EndsWith("/"))
            host += "/";
        newFile.Url = $"{host}{newFile.FilePath}/{newFile.Id + newFile.Suffix}";

        return newFile;
    }


    /// <summary>
    /// 删除文件
    /// </summary>
    /// <param name="filePath">文件完整路径（包括文件名）</param>
    /// <returns></returns>
    [AllowAnonymous]
    public async Task<bool> DeleteFile(string filePath)
    {
        var path = Path.Combine(_env.WebRootPath, "Upload/", filePath);
        if (File.Exists(path))
            File.Delete(path);
        return true;
    }
}