using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using ContactAPI.Data;



var builder = WebApplication.CreateBuilder(args);

// 🔓 Allow frontend to talk to backend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:8000","http://127.0.0.1:5500") // replace with your actual frontend URL if different
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=contact.db"));
    
// Register services into the container (aka Dependency Injection)
builder.Services.AddControllers();         // Enables attribute routing with [ApiController]
builder.Services.AddEndpointsApiExplorer(); // Required for Swagger
builder.Services.AddSwaggerGen();          // Generates Swagger/OpenAPI docs

var app = builder.Build();



// Only show Swagger when in development mode (not production)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                     // Serves the generated Swagger JSON
    app.UseSwaggerUI();                   // Serves the Swagger UI page (you visit in browser)
}

app.UseHttpsRedirection();                // Forces HTTPS usage (recommended)

app.UseCors("AllowFrontend");

app.UseAuthorization();                   // Enables [Authorize] if used later

app.MapControllers();                     // Maps your `[ApiController]` endpoints

app.Run();                                // Starts the app
