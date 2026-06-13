using Application.Activities.Queries;
using Application.Activities.Validators;
using Application.Core;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
{
  options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


// Configure CORS
builder.Services.AddCors();

// Configure the Mediator
builder.Services.AddMediatR(options =>
    options.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>()
);


// Configure Automapper
builder.Services.AddAutoMapper(cfg => { }, typeof(MappingProfiles));

// Configure Validtors
builder.Services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();

var app = builder.Build();

app.UseCors(options =>
    options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000")
);

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
