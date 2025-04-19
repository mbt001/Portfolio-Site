using Microsoft.AspNetCore.Mvc;
using ContactAPI.Data; 
using ContactAPI.Models; 
using System.Threading.Tasks;

namespace ContactAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context; 

       
        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] ContactRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) ||
                string.IsNullOrWhiteSpace(request.Email) ||
                string.IsNullOrWhiteSpace(request.Message) ||
                string.IsNullOrWhiteSpace(request.Subject))
            {
                return BadRequest(new { message = "All fields are required." });
            }

           
            var newMessage = new ContactMessage
            {
                Name = request.Name,
                Email = request.Email,
                Subject = request.Subject,
                Message = request.Message,
                CreatedAt = DateTime.UtcNow // optional: track time
            };

            
            _context.ContactMessages.Add(newMessage);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Form submitted successfully.",
                name = request.Name,
                email = request.Email
            });
        }
    }

    public class ContactRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string Subject { get; set; }
    }
}
