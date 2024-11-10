namespace HOTtEl.Models.Emtities
{
    public class BookingDtl
    {
        public  int ID {  get; set; }
       //public int bookingId { get; set; } 
        public required string customerName { get; set;}
        public long customerContact { get; set;}
        public DateTime checkInDate { get; set;}
        public DateTime checkOutDate { get; set; }
        public int totalRooms { get; set;}
        public double totalAmount { get; set;}
        //public  required string  bookingStatus  { get; set; }


    }



    public class BukingDtl
    {
       //public int bookingId { get; set; }
        public required string customerName { get; set; }
        public long customerContact { get; set; }
        public DateTime checkInDate { get; set; } = DateTime.Now;
        public DateTime checkOutDate { get; set; } = DateTime.Now;
        public int totalRooms { get; set; }
        public double totalAmount { get; set; }
       // public required string bookingStatus { get; set; }


    }
}
