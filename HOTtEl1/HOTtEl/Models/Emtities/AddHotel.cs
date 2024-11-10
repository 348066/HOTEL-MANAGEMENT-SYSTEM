namespace HOTtEl.Models.Emtities
{
    public class AddHotel
    {
        public int id {  get; set; }
        public required string hotelname { get; set; }
        public required string hoteltype { get; set; }
        public int hotelid { get; set; }

        public required string city { get; set; }
            
        public required string address { get; set; }
            
        public double distance { get; set; }
            
        public required string title { get; set; }
            
        public required string discription { get; set; }
            
        public double cheapestprice { get; set; }
        public int numberofrooms { get; set; }
      

    }

    public class Addhotel   
    {

        public required string hotelname { get; set; }
        public required string hoteltype { get; set; }
        public int hotelid { get; set; }

        public required string city { get; set; }

        public required string address { get; set; }

        public double distance { get; set; }

        public required string title { get; set; }

        public required string discription { get; set; }

        public double cheapestprice { get; set; }
        public int numberofrooms { get; set; }


    }

}
