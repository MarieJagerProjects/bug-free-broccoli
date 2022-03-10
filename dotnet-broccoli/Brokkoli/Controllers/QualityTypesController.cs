#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Brokkoli;
using Brokkoli.Data;

namespace Brokkoli.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualityTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public QualityTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/QualityTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QualityType>>> GetQualityTypes()
        {
            return await _context.QualityTypes.ToListAsync();
        }

        // GET: api/QualityTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QualityType>> GetQualityType(int id)
        {
            var qualityType = await _context.QualityTypes.FindAsync(id);

            if (qualityType == null)
            {
                return NotFound();
            }

            return qualityType;
        }

        // PUT: api/QualityTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQualityType(int id, QualityType qualityType)
        {
            if (id != qualityType.Id)
            {
                return BadRequest();
            }

            _context.Entry(qualityType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QualityTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/QualityTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QualityType>> PostQualityType(QualityType qualityType)
        {
            _context.QualityTypes.Add(qualityType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQualityType", new { id = qualityType.Id }, qualityType);
        }

        // DELETE: api/QualityTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQualityType(int id)
        {
            var qualityType = await _context.QualityTypes.FindAsync(id);
            if (qualityType == null)
            {
                return NotFound();
            }

            _context.QualityTypes.Remove(qualityType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QualityTypeExists(int id)
        {
            return _context.QualityTypes.Any(e => e.Id == id);
        }
    }
}
