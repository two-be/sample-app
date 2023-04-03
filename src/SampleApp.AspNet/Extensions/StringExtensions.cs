using System.Text.Json;

namespace SampleApp.AspNet.Extensions;

public static class StringExtensions
{
    public static T? ToObject<T>(this string json)
    {
        return JsonSerializer.Deserialize<T>(json);
    }
}