using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.JsonWebTokens;
using NotesApp.Server.Models;
using System.Security.Claims;

namespace NotesApp.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesAppContext _context;
        public NotesController(NotesAppContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllNotes()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var listNotes = await _context.Notes.Where(n=>n.UserId.ToString().Equals(userId)).ToListAsync();
            return Ok(listNotes);
        }

        [HttpPost]
        public async Task<IActionResult> AddNotes([FromBody] Notes note)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null) { 
                return Unauthorized(); // Возвращает код 401 Unauthorized
            }

            if (note == null)
            {
                return BadRequest("Note is null");
            }

            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
            return Ok("Added note.");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateNote([FromBody] Notes note)
        {
            _context.Notes.Update(note);
            await _context.SaveChangesAsync();
            return Ok("Note update.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            Guid guidId= new Guid(id);
            await _context.Notes.Where(n=>n.NoteId==guidId).ExecuteDeleteAsync();
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
