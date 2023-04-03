namespace SampleApp.AspNet.Models;

public record ExceptionInfo
{
    public string Message { get; set; } = string.Empty;
    public string StackTrace { get; set; } = string.Empty;

    public ExceptionInfo(Exception ex)
    {
        Message = ex.InnerException?.Message ?? ex.Message;
        StackTrace = ex.InnerException?.StackTrace ?? ex.StackTrace ?? string.Empty;
    }
}