using System.Diagnostics;
using System.Runtime.InteropServices;

var builder = WebApplication.CreateBuilder(args);
string[] subPaths = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory + "Configuration"); //得到所有子目录
foreach (string path in subPaths)
{
    builder.Configuration.AddJsonFile(path, false, true);
}

//全局配置选项初始化
ConfigurationOption.Initialize(builder.Configuration);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSqlSugar();
builder.Services.AddSwaggerGen(config =>
{
    #region 配置API文档说明

    config.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "SuperApi无实体开发框架",
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
//解决Json序列化的时候没有对中文进行处理
builder.Services.AddMvc().AddNewtonsoftJson(option =>
    {
        //忽略循环引用
        option.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        //精度long没有19位长度，所以序列化雪花ID时要序列化成string 
        option.SerializerSettings.Converters.Add(new LongToStringConverter());
        //设置时间格式
        option.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";
    }
).AddJsonOptions(cfg =>
{
    //解决后端返回数据中文被编码
    cfg.JsonSerializerOptions.Encoder = JavaScriptEncoder.Create(UnicodeRanges.All);
});
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


//设置全局jwt授权校验，白名单可以直接在接口函数上贴[AllowAnonymous]特性即可
builder.Services.AddAuthorization(options =>
{
    options.FallbackPolicy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .Build();
});

// JWT
builder.Services.AddAuthentication(options => { options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme; })
    .AddJwtBearer(x =>
    {
        x.TokenValidationParameters = new TokenValidationParameters
        {
            //设置验证时间时要应用的时钟偏移
            ClockSkew = TimeSpan.FromSeconds(
                long.Parse(builder.Configuration.GetSection("JWTSettings:ClockSkew").Value!)),
            ValidateIssuer =
                Boolean.Parse(builder.Configuration.GetSection("JWTSettings:ValidateIssuer").Value!), //是否在令牌期间验证签发者
            ValidateAudience =
                Boolean.Parse(builder.Configuration.GetSection("JWTSettings:ValidateAudience").Value!), //是否验证接收者
            ValidateLifetime =
                Boolean.Parse(builder.Configuration.GetSection("JWTSettings:ValidateLifetime").Value!), //是否验证失效时间
            ValidateIssuerSigningKey =
                Boolean.Parse(builder.Configuration.GetSection("JWTSettings:ValidateIssuerSigningKey").Value!), //是否验证签名
            ValidIssuer = builder.Configuration.GetSection("JWTSettings:ValidIssuer").Value, //签发者, 签发token的人
            ValidAudience = builder.Configuration.GetSection("JWTSettings:ValidAudience").Value, //接收者
            IssuerSigningKey =
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration.GetSection("JWTSettings:IssuerSigningKey")
                        .Value!)) //密钥
        };
    });
// 允许跨域
builder.Services.AddCors();
// 配置Nginx转发获取客户端真实IP
// 注1：如果负载均衡不是在本机通过 Loopback 地址转发请求的，一定要加上options.KnownNetworks.Clear()和options.KnownProxies.Clear()
// 注2：如果设置环境变量 ASPNETCORE_FORWARDEDHEADERS_ENABLED 为 True，则不需要下面的配置代码
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.All;
    options.KnownNetworks.Clear();
    options.KnownProxies.Clear();
});
builder.Services.AddEasyCaching(options =>
{
    if (builder.Configuration.GetSection("Cache:CacheType").Value == "Memory")
    {
        options.UseInMemory("memory");
    }
    else
    {
        options.UseRedis(config => { config.DBConfig.Endpoints.Add(new ServerEndPoint("127.0.0.1", 6379)); }, "redis");
    }
});
builder.Services.AddTransient<CacheProvider>();
// 限流服务
//加载ClientRateLimiting配置文件
builder.Services.Configure<ClientRateLimitOptions>(builder.Configuration.GetSection("ClientRateLimiting"));
//加载ClientRateLimitPolicies配置文件
builder.Services.Configure<ClientRateLimitPolicies>(builder.Configuration.GetSection("ClientRateLimitPolicies"));
builder.Services.AddInMemoryRateLimiting();
// 注入限流配置文件服务
builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();

// 设置接口超时时间和上传大小
builder.WebHost.UseKestrel(options =>
{
    options.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(30);
    options.Limits.RequestHeadersTimeout = TimeSpan.FromMinutes(30);
    options.Limits.MaxRequestBodySize = null;
});
var app = builder.Build();
// if (app.Environment.IsDevelopment())
// {}
app.UseSwagger();
app.UseSwaggerUI(options => { options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1"); });
app.UseDefaultFiles();

//注册全局异常中间件，需要放到其他中间件的顶部执行
app.UseGlobalExceptionHandle();
//静态文件重载
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider =
        new PhysicalFileProvider(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wwwroot")), //将目录切换到静态文件所在目录
    // RequestPath =new PathString("/files"), //虚拟路径用来访问静态文件
    OnPrepareResponse = ctx =>
    {
        const int cacheControl = 60; //设置缓存静态文件的时间
        var headers = ctx.Context.Response.GetTypedHeaders();
        headers.CacheControl = new CacheControlHeaderValue
        {
            MaxAge = TimeSpan.FromSeconds(cacheControl)
        };
    }
});
//注入动态API中间件
// app.UseDynamicHandle();
app.UseRouting();
app.UseCors();
// 限流组件（在跨域之后）
app.UseIpRateLimiting();
app.UseClientRateLimiting();
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapRazorPages();
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});
string host = "http://localhost:" + ConfigurationOption.config.GetSection("Urls").Value!.Split("*:")[1] +
              "/admin";
//发布后程序自动打开浏览器
if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
{
    Process.Start(new ProcessStartInfo(host) { UseShellExecute = true });
}
else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
{
    Process.Start("xdg-open", host);
}
else if(RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
{
    Process.Start("open", host);
}
app.Run();

