using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;
using Quartz;
using Quartz.Impl;
using SuperApi.Job;
using SuperApi.SqlSugar;

namespace SuperApi.Service;

/// <summary>
/// 定时任务管理
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class JobService: IDynamicWebApi
{

    private readonly Repository<Model.Job> _db;
    private readonly StdSchedulerFactory _schedulerFactory;
    /// <summary>
    /// 账号授权服务
    /// </summary>
    /// <param name="db"></param>
    /// <param name="schedulerFactory"></param>
    public JobService(Repository<Model.Job> db, StdSchedulerFactory schedulerFactory)
    {
        _db = db;
        _schedulerFactory = schedulerFactory;
    }
    /// <summary>
    /// 定时任务测试
    /// </summary>
    [AllowAnonymous]
    [HttpPost]
    public async Task Test()
    {
        IScheduler scheduler = await _schedulerFactory.GetScheduler();
        await scheduler.Start();
        // 4. 创建作业
        IJobDetail job = JobBuilder.Create<TestJob>()
            .WithIdentity("myJob", "group1")
            .Build();
 
        // 5. 创建触发器
        ITrigger trigger = TriggerBuilder.Create()
            .WithIdentity("myTrigger", "group1")
            .StartNow() // 立即启动
            .WithSimpleSchedule(x => x.WithRepeatCount(0).WithIntervalInSeconds(10)) // 每10秒执行一次，无重复
            .Build();
 
        // 6. 将作业和触发器加入调度器
        await scheduler.ScheduleJob(job, trigger);
        // 程序运行一段时间...
 
        // 7. 关闭调度器
        await scheduler.Shutdown();
    }
}