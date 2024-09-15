using System.ComponentModel.DataAnnotations;

namespace NotesApp.Server.Models
{
    public class Notes
    {
        [Key]
        public Guid NoteId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Guid UserId { get; set; }
    }
}
