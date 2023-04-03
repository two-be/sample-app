using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleApp.AspNet.Abstracts;
using SampleApp.AspNet.Data;
using SampleApp.AspNet.Extensions;
using SampleApp.AspNet.Models;

namespace SampleApp.AspNet.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ValuesController : BaseController
{
    private readonly AppDbContext _context;

    public ValuesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<ValueInfo>>> Get()
    {
        try
        {
            return await _context.Values.ToListAsync(_cancellation);
        }
        catch (Exception ex)
        {
            return InternalServerError(ex);
        }
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] ValueInfo value)
    {
        try
        {
            var user = new
            {
                Id = 2,
                Name = "Two",
            };
            var info = new ValueInfo
            {
                Value = user.ToJson(),
            };
            await _context.AddAsync(info);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception ex)
        {
            return InternalServerError(ex);
        }
    }
}