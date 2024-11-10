namespace HOTtEl.Models.Emtities
{
    public class AddRooms
    {
        public int Id { get; set; }
        public  required string roomtitle { get; set; }
        public double  price { get; set; }
        public int maxpeople { get; set; }
        public required string Discription { get; set; } 
        public int roomnumber { get; set; }

        public required string hotelname { get; set; }


    }


    public class  AddRoomss
    {

        public required string roomtitle { get; set; }
        public double price { get; set; }
        public int maxpeople { get; set; }
        public required string Discription { get; set; }
        public int roomnumber { get; set; }

        public required string hotelname { get; set; }

    }
}
