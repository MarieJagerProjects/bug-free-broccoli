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
    public class VegetableTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public VegetableTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/VegetableTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VegetableType>>> GetVegetableTypes()
        {
            return await _context.VegetableTypes.ToListAsync();
        }

        // GET: api/VegetableTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VegetableType>> GetVegetableType(int id)
        {
            var vegetableType = await _context.VegetableTypes.FindAsync(id);

            if (vegetableType == null)
            {
                return NotFound();
            }

            return vegetableType;
        }

        // PUT: api/VegetableTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVegetableType(int id, VegetableType vegetableType)
        {
            if (id != vegetableType.Id)
            {
                return BadRequest();
            }

            _context.Entry(vegetableType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VegetableTypeExists(id))
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

        // POST: api/VegetableTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VegetableType>> PostVegetableType(VegetableType vegetableType)
        {
            _context.VegetableTypes.Add(vegetableType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVegetableType", new { id = vegetableType.Id }, vegetableType);
        }

        // DELETE: api/VegetableTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVegetableType(int id)
        {
            var vegetableType = await _context.VegetableTypes.FindAsync(id);
            if (vegetableType == null)
            {
                return NotFound();
            }

            _context.VegetableTypes.Remove(vegetableType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VegetableTypeExists(int id)
        {
            return _context.VegetableTypes.Any(e => e.Id == id);
        }
    }
}
