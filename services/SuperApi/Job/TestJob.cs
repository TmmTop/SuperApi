using Quartz;
namespace SuperApi.Job;
/// <summary>
/// 测试任务
/// </summary>
public class TestJob : IJob
{
    /// <summary>
    /// 任务执行
    /// </summary>
    /// <param name="context"></param>
    public async Task Execute(IJobExecutionContext context)
    {
        await Console.Out.WriteLineAsync($"{DateTime.Now}:Hello!");
    }
}