using Microsoft.AspNetCore.Mvc;
using SampleApp.AspNet.Abstracts;

namespace SampleApp.AspNet.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CspController : BaseController
{
    [HttpGet]
    public ActionResult Get()
    {
        Response.Headers.ContentSecurityPolicy = "default-src 'self'";
        return Ok(Response.Headers);
    }
}