using Microsoft.AspNetCore.Mvc;
using SampleApp.AspNet.Models;

namespace SampleApp.AspNet.Abstracts;

public abstract class BaseController : ControllerBase
{
    protected CancellationToken _cancellation => HttpContext.RequestAborted;

    protected ActionResult InternalServerError(Exception ex)
    {
        return StatusCode(400, new ExceptionInfo(ex));
    }
}