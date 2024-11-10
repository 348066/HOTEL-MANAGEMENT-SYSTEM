using HOTtEl.Models.Emtities;
using Microsoft.EntityFrameworkCore;

namespace HOTtEl.Data
{
    public class ApplicationDbContext: DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<NewRegcus> newRegCuss { get; set; }
        public DbSet<AddRooms> addRoomss { get; set; }
        public DbSet<AddHotel> addHotels { get; set; }

        public DbSet<BookingDtl> bookingDtls { get; set; }
        public DbSet<Payment> payments { get; set; }



    }
}
