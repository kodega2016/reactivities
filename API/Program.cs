using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
builder.Services.AddMediatR(options =>
    options.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>()
);

builder.Services.AddAutoMapper(cfg => { }, typeof(MappingProfiles));

var app = builder.Build();

app.UseCors(options =>
    options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000")
);

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
