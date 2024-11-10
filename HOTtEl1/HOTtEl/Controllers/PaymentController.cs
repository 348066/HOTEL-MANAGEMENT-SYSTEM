using HOTtEl.Data;
using HOTtEl.Models.Emtities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HOTtEl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public PaymentController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Getallpayment()
        {
            var allpayments = dbContext.payments.ToList();
            return Ok(allpayments);

        }

        [HttpPost]
        [Route("payment")]
        public IActionResult Addapyment(Payment addPaymentDtl)
        {



          
            {
                dbContext.payments.Add(new Payment
                {
                    CardNumber = addPaymentDtl.CardNumber,
                    CardholderName=addPaymentDtl.CardholderName,
                    ExpirationMonth=addPaymentDtl.ExpirationMonth,
                    ExpirationYear=addPaymentDtl.ExpirationYear,
                    Cvv=addPaymentDtl.Cvv
                    
                });
                // dbContext.newRegCuss.Add(customerEntity);
                dbContext.SaveChanges();
                return Ok(true);
            }


           
        }
    }
}
