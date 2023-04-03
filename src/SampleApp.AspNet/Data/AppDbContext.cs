using Microsoft.EntityFrameworkCore;
using SampleApp.AspNet.Models;

namespace SampleApp.AspNet.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<ValueInfo> Values { get; set; } = null!;
}