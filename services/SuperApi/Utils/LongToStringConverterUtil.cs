using Newtonsoft.Json;

namespace SuperApi.Utils;
/// <summary>
/// 设置返回Json名称全小写
/// </summary>
public class LongToStringConverterUtil : JsonConverter<long>
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="reader"></param>
    /// <param name="objectType"></param>
    /// <param name="existingValue"></param>
    /// <param name="hasExistingValue"></param>
    /// <param name="serializer"></param>
    /// <returns></returns>
    public override long ReadJson(JsonReader reader, Type objectType, long existingValue, bool hasExistingValue,
        JsonSerializer serializer)
    {
        long value = Convert.ToInt64(reader.Value);
        return value;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="writer"></param>
    /// <param name="value"></param>
    /// <param name="serializer"></param>
    public override void WriteJson(JsonWriter writer, long value, JsonSerializer serializer)
    {
        string stringValue = value.ToString();
        writer.WriteValue(stringValue);
    }
}