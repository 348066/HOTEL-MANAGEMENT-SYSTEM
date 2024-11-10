using HOTtEl.Data;
using HOTtEl.Models.Emtities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HOTtEl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddRoomController : ControllerBase
    {

        private readonly ApplicationDbContext dbContext;

        public AddRoomController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("Showrooomlist")]

   
        public IActionResult getaallrooms()
        {
            var getaallroomss = dbContext.addRoomss.ToList();
            return Ok(getaallroomss);

        }
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetrroomById(int id)
        {
            var rooms = dbContext.addRoomss.Find(id);
            if (rooms == null)
            {
                return NotFound();
            }
            return Ok(rooms);
        }
        [HttpPost]
        [Route("AddRooms")]
        public IActionResult AddRooms(AddRoomss addRoomsDto)
        {



         
            {
                dbContext.addRoomss.Add(new AddRooms
                {

                    roomtitle = addRoomsDto.roomtitle,
                    price = addRoomsDto.price,
                    maxpeople = addRoomsDto.maxpeople,
                    Discription= addRoomsDto.Discription,
                    roomnumber = addRoomsDto.roomnumber,
                    hotelname= addRoomsDto.hotelname


                });
                // dbContext.newRegCuss.Add(customerEntity);
                dbContext.SaveChanges();
                return Ok(true);
            }


      
        }
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult Updaterooms(int id, AddRooms updateRoomDto)
        {
            var Roomss = dbContext.addRoomss.Find(id);
            if (Roomss == null)
            {
                return NotFound();
            }
            Roomss.roomtitle = updateRoomDto.roomtitle;
            Roomss.price = updateRoomDto.price;
            Roomss.maxpeople = updateRoomDto.maxpeople;
            Roomss.Discription = updateRoomDto.Discription;
            Roomss.roomnumber = updateRoomDto.roomnumber;
            Roomss.hotelname = updateRoomDto.hotelname;
                


            dbContext.SaveChanges();
            return Ok(Roomss);

        }


        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteRooms(int id)
        {
            var roomss = dbContext.addRoomss.Find(id);
            if (roomss is null)
            {
                return NotFound();
            }
            dbContext.addRoomss.Remove(roomss);
            dbContext.SaveChanges();
            return Ok(true);

        }



    }
}
