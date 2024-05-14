using System.ComponentModel;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Panda.DynamicWebApi;
using Panda.DynamicWebApi.Attributes;

namespace TimServe.Core;

/// <summary>
/// 系统枚举类服务
/// </summary>
[ApiExplorerSettings(GroupName = "default")]
[DynamicWebApi(Module = "default")]
public class EnumService : IDynamicWebApi
{
    /// <summary>
    /// 获取所有枚举类型
    /// </summary>
    /// <returns></returns>
    [DisplayName("获取所有枚举类型")]
    public List<EnumTypeOutput> GetEnumTypeList()
    {
        var result = new List<EnumTypeOutput>();
        var enumTypes = Assembly.GetExecutingAssembly().GetTypes().Where(x => x.IsEnum).ToList();
        foreach (var enumType in enumTypes)
        {
            result.Add(GetEnumDescription(enumType));
        }

        return result;
    }

    private EnumTypeOutput GetEnumDescription(Type type)
    {
        string description = type.Name;
        var attrs = type.GetCustomAttributes(typeof(DescriptionAttribute), false);
        if (attrs.Any())
        {
            var att = ((DescriptionAttribute[])attrs)[0];
            description = att.Description;
        }

        return new EnumTypeOutput
        {
            TypeDescribe = description,
            TypeName = type.Name,
            TypeRemark = description
        };
    }

    /// <summary>
    /// 通过枚举类型获取枚举值集合
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [DisplayName("通过枚举类型获取枚举值集合")]
    public List<EnumEntity> GetEnumDataList([FromQuery] EnumInput input)
    {
        var enumType = Assembly.GetExecutingAssembly().GetTypes()
            .FirstOrDefault(x => x.Name == input.EnumName && x.IsEnum);
        if (enumType == null)
            throw new Exception(input.EnumName + "枚举类型不存在！");
        var arr = System.Enum.GetNames(enumType!);
        return arr.Select(sl =>
        {
            var item = System.Enum.Parse(enumType, sl);
            return new EnumEntity
            {
                Name = item.ToString(),
                Describe = item.GetType().GetMember(item.ToString()).FirstOrDefault()
                    ?.GetCustomAttribute<DescriptionAttribute>()
                    ?.Description ?? item.ToString(),
                Value = item.GetHashCode()
            };
        }).ToList();
    }
}