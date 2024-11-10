using HOTtEl.Data;
using HOTtEl.Models.Emtities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;


namespace HOTtEl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewRegCusController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public NewRegCusController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Getallcustomers()
        {
            var allcustomers = dbContext.newRegCuss.ToList();
            return Ok(allcustomers);

        }
        [HttpGet]
        [Route("{id:Guid}")]
        public IActionResult GetCustomerById(Guid id)
        {
            var customer = dbContext.newRegCuss.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
        [HttpPost]
        [Route("reg")]
        public IActionResult Addcustomer(AddCustDtl addCustomersDtl)
        {



            var objuser = dbContext.newRegCuss.FirstOrDefault(x => x.Email == addCustomersDtl.Email);
            if (objuser == null)
            {
                dbContext.newRegCuss.Add(new NewRegcus
                {
                    Name = addCustomersDtl.Name,
                    contact = addCustomersDtl.contact,
                    Email = addCustomersDtl.Email,
                    Password = addCustomersDtl.Password,
                    ConfirmPassword = addCustomersDtl.ConfirmPassword,
                    //Role = addCustomersDtl.Role
                });
                // dbContext.newRegCuss.Add(customerEntity);
                dbContext.SaveChanges();
                return Ok(true);
            }


            else
            {
                return BadRequest(false);

            }
        }




        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginCustDtl loginDto)
        {
            var obuser = dbContext.newRegCuss.FirstOrDefault(x => x.Email == loginDto.Email && x.Password == loginDto.Password);
            if (obuser != null)
            {
                return Ok(obuser);
            }
            else
            {
                return NoContent();
            }


        }
        [HttpPut]
        [Route("{id:Guid}")]
        public IActionResult UpdateCustomer(Guid id, NewRegcus updateCustomerDtl)
        {
            var customer = dbContext.newRegCuss.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            customer.Name = updateCustomerDtl.Name;
            customer.contact = updateCustomerDtl.contact;
            customer.Email = updateCustomerDtl.Email;
            customer.Password = updateCustomerDtl.Password;
            customer.ConfirmPassword = updateCustomerDtl.ConfirmPassword;
            dbContext.SaveChanges();
            return Ok(customer);

        }


        [HttpDelete]
        [Route("{id:Guid}")]
        public IActionResult DeleteCustomer(Guid id)
        {
            var customer = dbContext.newRegCuss.Find(id);
            if (customer is null)
            {
                return NotFound();
            }
            dbContext.newRegCuss.Remove(customer);
            dbContext.SaveChanges();
            return Ok(customer);

        }

    }
}

