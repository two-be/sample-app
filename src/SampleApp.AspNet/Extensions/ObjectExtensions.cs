using System.Text.Json;
using System.Text.Json.Serialization;

namespace SampleApp.AspNet.Extensions;

public static class ObjectExtensions
{
    public static string ToJson(this object obj)
    {
        var options = new JsonSerializerOptions
        {
            WriteIndented = true,
            ReferenceHandler = ReferenceHandler.IgnoreCycles,
        };
        return JsonSerializer.Serialize(obj, options);
    }
}