using HOTtEl.Data;
using HOTtEl.Models.Emtities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HOTtEl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddHotelController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public AddHotelController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("Showhotellist")]


        public IActionResult getaallhotel()
        {
            var hotel = dbContext.addHotels.ToList();
            return Ok(hotel);

        }
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GethotelById(int id)
        {
            var hotel = dbContext.addHotels.Find(id);
            if (hotel == null)
            {
                return NotFound();
            }
            return Ok(hotel);
        }
        [HttpPost]
        [Route("AddHotel")]
        public IActionResult AddHtel(Addhotel addhotelDto)
        {



            var objhotel = dbContext.addHotels.FirstOrDefault(x => x.hotelid == addhotelDto.hotelid);
            if (objhotel == null)
            {
                dbContext.addHotels.Add(new AddHotel
                {

                     hotelname= addhotelDto.hotelname,
                    hoteltype = addhotelDto.hoteltype,
                    hotelid = addhotelDto.hotelid,
                    city = addhotelDto.city,
                    address = addhotelDto.address,
                    distance = addhotelDto.distance,
                    title = addhotelDto.title,
                    discription = addhotelDto.discription,
                    cheapestprice=addhotelDto.cheapestprice,
                    numberofrooms = addhotelDto.numberofrooms,


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
                
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult Updahotel(int id,AddHotel updateotelDto)
        {
            var hotel = dbContext.addHotels.Find(id);
            if (hotel == null)
            {
                return NotFound();
            }
            hotel.hotelname=updateotelDto.hotelname;
            hotel.hoteltype=updateotelDto.hoteltype;
            hotel.hotelid=updateotelDto.hotelid;
            hotel.city=updateotelDto.city;
            hotel.address = updateotelDto.address;
            hotel.distance=updateotelDto.distance;
            hotel.title = updateotelDto.title;
            hotel.discription = updateotelDto.discription;
            hotel.cheapestprice = updateotelDto.cheapestprice;
            hotel.numberofrooms=updateotelDto.numberofrooms;
          

            dbContext.SaveChanges();
            return Ok(hotel);

        }


        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult Deletehotel(int id)
        {
            var hotel = dbContext.addHotels.Find(id);
            if (hotel is null)
            {
                return NotFound();
            }
            dbContext.addHotels.Remove(hotel);
            dbContext.SaveChanges();
            return Ok(true);

        }



    }
}

