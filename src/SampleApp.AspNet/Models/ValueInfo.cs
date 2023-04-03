using System.ComponentModel.DataAnnotations.Schema;
using SampleApp.AspNet.Extensions;

namespace SampleApp.AspNet.Models
{
    public class ValueInfo
    {
        public string Id { get; set; } = Guid.NewGuid().ToString("N");
        public string Value { get; set; } = "{}";

        [NotMapped]
        public dynamic TrueValue => Value.ToObject<dynamic>() ?? new { };
    }
}