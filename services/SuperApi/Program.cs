using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;
using AspNetCoreRateLimit;
using Mapster;
using MapsterMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Converters;
using Panda.DynamicWebApi;
using Quartz;
using Quartz.AspNetCore;
using SuperApi.Cache;
using SuperApi.Config;
using SuperApi.Filter;
using SuperApi.SqlSugar;
using SuperApi.Utils;

var builder = WebApplication.CreateBuilder(args);
string[] subPaths = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory + "Configuration"); 
foreach (string path in subPaths)
{
    builder.Configuration.AddJsonFile(path, false, true);
}
ConfigProvider.Initialize(builder.Configuration);
builder.Services.AddCache();
builder.Services.AddSqlSugar();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(config =>
{ 
    config.SwaggerDoc("default", new OpenApiInfo
    {
        Title = "SuperApi极致开发平台",
        Version =  "1.0.0",
        Description = "最好用的NET8框架，前后端分离/等等技术栈，强无敌！",
        Contact = new OpenApiContact
        {
            Name = "甜蜜蜜",
            Email = "1844045442@qq.com",
            Url= new Uri("https://gitee.com/tmm/SuperApi")
        },
    });
    config.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme
    {
        Description = "JwT Authorization header using the Bearer scheme. ",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Scheme = "bearer",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JwT"
    });
    config.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            new List<string>()
        }
    });
    var basePath = AppContext.BaseDirectory;
    DirectoryInfo d = new DirectoryInfo(basePath);
    FileInfo[] files = d.GetFiles("*.xml");
    var xmlCommentsFilePath = files.Select(a => Path.Combine(basePath, a.FullName)).ToList();
    foreach (var item in xmlCommentsFilePath)
    {
        config.IncludeXmlComments(item, true);
    }
});
builder.Services.AddMvc(options =>
{
    options.Filters.Add(new LoggerFilter());
    options.Filters.Add(new UniResultFilter());
    options.Filters.Add(new ExceptionFilter());
}).AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";
        options.SerializerSettings.Converters.Add(new StringEnumConverter());
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        options.SerializerSettings.Converters.Add(new LongToStringConverterUtil());
    }
).AddJsonOptions(cfg =>
{
    cfg.JsonSerializerOptions.Encoder = JavaScriptEncoder.Create(UnicodeRanges.All);
    cfg.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});
builder.Services.AddRouting(options =>
{
    options.LowercaseUrls = false;
});
builder.Services.AddDynamicWebApi((options) =>
{
    options.RemoveActionPostfixes = new List<string>
    {
        "Async", "Get", "Post"
    };
    options.RemoveControllerPostfixes = new List<string>
    {
        "AppService", "Service"
    };
});
builder.Services.AddAuthorization(options =>
{
    options.FallbackPolicy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .Build();
});
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(x =>
    {
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ClockSkew = TimeSpan.FromSeconds(long.Parse(ConfigProvider.Config["JWTSettings:ClockSkew"]!)),
            ValidateIssuerSigningKey = true,
            ValidIssuer = ConfigProvider.Config["JWTSettings:ValidIssuer"],
            ValidAudience = ConfigProvider.Config["JWTSettings:ValidAudience"],
            IssuerSigningKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ConfigProvider.Config["JWTSettings:IssuerSigningKey"]!))
        };
    });
builder.Services.AddCors();
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.All;
    options.KnownNetworks.Clear();
    options.KnownProxies.Clear();
});
builder.Services.AddQuartz();
builder.Services.AddQuartzServer(options => { options.WaitForJobsToComplete = true; });
builder.Services.Configure<ClientRateLimitOptions>(ConfigProvider.Config.GetSection("ClientRateLimiting"));
builder.Services.Configure<ClientRateLimitPolicies>(ConfigProvider.Config.GetSection("ClientRateLimitPolicies"));
builder.Services.Configure<IpRateLimitOptions>(ConfigProvider.Config.GetSection("IpRateLimiting"));
builder.Services.Configure<IpRateLimitPolicies>(ConfigProvider.Config.GetSection("IpRateLimitPolicies"));
builder.Services.AddInMemoryRateLimiting();
builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
builder.WebHost.UseKestrel(options =>
{
    options.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(30);
    options.Limits.RequestHeadersTimeout = TimeSpan.FromMinutes(30);
    options.Limits.MaxRequestBodySize = null;
});
var typeAdapterConfig = TypeAdapterConfig.GlobalSettings;
typeAdapterConfig.Scan(AppDomain.CurrentDomain.GetAssemblies());
var mapperConfig = new Mapper(typeAdapterConfig);
builder.Services.AddSingleton<IMapper>(mapperConfig);
var app = builder.Build();
// if (app.Environment.IsDevelopment())
// {
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint($"/swagger/default/swagger.json", "基础服务模块"); //分组显示
    });
//}
app.UseStaticFiles(new StaticFileOptions()    {   
    FileProvider = new PhysicalFileProvider(            
        Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")),        
    RequestPath = new PathString("")    
});

app.UseCors(configs =>
{
    configs.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});
app.UseRouting();
app.UseIpRateLimiting();
app.UseClientRateLimiting();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});
app.UseHttpsRedirection();
string host = "http://localhost:" + ConfigProvider.Config.GetSection("Urls").Value!.Split("*:")[1] +
              "/index.html";
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