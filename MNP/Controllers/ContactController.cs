using MNP.Models;
using MNP.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MNP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IRepository _repository;

        public ContactController(IRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> ContactList()
        {
            return await _repository.SelectAll<Contact>();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(long id)
        {
            var model = await _repository.SelectById<Contact>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(long id, Contact model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateAsync<Contact>(model);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> InsertContact([FromBody]Contact model)
        {
            await _repository.CreateAsync<Contact>(model);
            return CreatedAtAction("GetContact", new { id = model.Id }, model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(long id)
        {
            var model = await _repository.SelectById<Contact>(id);

            if (model == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<Contact>(model);

            return model;
        }
    }
}
