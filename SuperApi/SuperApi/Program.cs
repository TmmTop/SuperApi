using Microsoft.Extensions.FileProviders;
using Microsoft.Net.Http.Headers;
using SuperApi.Core.Handle;
using Newtonsoft.Json;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSqlSugar();
builder.Services.AddSwaggerGen(config =>
{
    #region 配置API文档说明

    config.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "大咪咪云ORM框架",
        Description = "说明：无实体建库建表，对无实体库表进行增删改查，支持15种条件查询，以及分页，列表，无限级树形列表等等炫酷功能！ 从此告别加班，告别知识付费，自己成为全栈大佬",
        Contact = new OpenApiContact
        {
            Name = "甜蜜蜜",
            Email = "1844045442@qq.com"
        }
    });

    var basePath = AppContext.BaseDirectory;
    var xmlPath = Path.Combine(basePath, "SuperApi.Core.xml");
    config.IncludeXmlComments(xmlPath, true);

    #endregion
});
builder.Services.AddMvc();
builder.Services.AddRouting(options =>
{
    //路由小写
    options.LowercaseUrls = true;
});
builder.Services.AddDynamicWebApi((options) =>
{
    // 清空API结尾，不删除API结尾；若不清空 CreatUserAsync 将变为 CreateUser
    options.RemoveActionPostfixes.Clear();
});

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => { options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1"); });
}
//注册全局异常中间件，需要放到其他中间件的顶部执行
app.UseGlobalExceptionHandle();
//静态文件重载
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wwwroot")), //将目录切换到静态文件所在目录
    // RequestPath =new PathString("/files"), //虚拟路径用来访问静态文件
    OnPrepareResponse = ctx =>
    {
        const int cacheControl = 60;//设置缓存静态文件的时间
        var headers = ctx.Context.Response.GetTypedHeaders();
        headers.CacheControl = new CacheControlHeaderValue
        {
            MaxAge = TimeSpan.FromSeconds(cacheControl)
        };
    }
});
//注入动态API中间件
app.UseDynamicHandle();
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});
app.Run();