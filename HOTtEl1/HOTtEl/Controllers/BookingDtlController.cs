using HOTtEl.Data;
using HOTtEl.Models.Emtities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HOTtEl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingDtlController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public BookingDtlController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("Showbookinglist")]


        public IActionResult getaallbooklist()
        {
            var book = dbContext.bookingDtls.ToList();
            return Ok(book);

        }
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetbookById(int id)
        {
            var book = dbContext.bookingDtls.Find(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
        [HttpPost]
        [Route("Addbook")]
        public IActionResult Addbook(BookingDtl addbookDto)
        {



            //var objbook = dbContext.bookingDtls.FirstOrDefault(x => x.customerContact == addbookDto.customerContact);
            //if (objbook == null)
            //{
                dbContext.bookingDtls.Add(new BookingDtl
                {

                    //bookingId = addbookDto.bookingId,
                    customerName = addbookDto.customerName,
                    customerContact = addbookDto.customerContact,
                    checkInDate = addbookDto.checkInDate,
                    checkOutDate = addbookDto.checkOutDate,
                    totalRooms = addbookDto.totalRooms,
                    totalAmount = addbookDto.totalAmount,
                   // bookingStatus = addbookDto.bookingStatus,

                });
                // dbContext.newRegCuss.Add(customerEntity);
                dbContext.SaveChanges();
                return Ok(true);
            //}


            //else
            //{
            //    return BadRequest(false);

            //}
        }

        [HttpPost]
        [Route("bookusercheck")]
        public IActionResult bookuserceck(BookingDtl bookusercheckdto)
        {
            var obuser = dbContext.newRegCuss.FirstOrDefault(x => x.contact == bookusercheckdto.customerContact);
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
        [Route("{id:int}")]
        public IActionResult updatebook(int id, BookingDtl updatebookDto)
        {
            var book = dbContext.bookingDtls.Find(id);
            if (book == null)
            {
                return NotFound();
            }
           // book.bookingId = updatebookDto.bookingId;
            book.customerName = updatebookDto.customerName;
            book.customerContact = updatebookDto.customerContact;
            book.checkInDate = updatebookDto.checkInDate;
            book.checkOutDate = updatebookDto.checkOutDate;
            book.totalRooms = updatebookDto.totalRooms;
            book.totalAmount = updatebookDto.totalAmount;
            //book.bookingStatus = updatebookDto.bookingStatus;




            dbContext.SaveChanges();
            return Ok(book);

        }






        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult Deletebook(int id)
        {
            var book = dbContext.bookingDtls.Find(id);
            if (book is null)
            {
                return NotFound();
            }
            dbContext.bookingDtls.Remove(book);
            dbContext.SaveChanges();
            return Ok(true);

        }

    }
}
