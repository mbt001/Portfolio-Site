namespace ContactAPI.Models
{
    public class ContactMessage
    {
        public int Id { get; set; } // Primary key

        public string Name { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }

        public string? Subject { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
