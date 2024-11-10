using Microsoft.VisualBasic;

namespace HOTtEl.Models.Emtities
{
    public class Payment
    {
        public Guid Id { get; set; }
        public long CardNumber { get; set; }
        public required string CardholderName { get; set; }
        public int ExpirationMonth { get; set; } // Add month
        public int ExpirationYear { get; set; }  // Add year
        public int Cvv { get; set; }

        // Optionally, you can add a computed property for full expiration date
        public DateTime ExpirationDate => new DateTime(ExpirationYear, ExpirationMonth, 1).AddMonths(1).AddDays(-1);

    }


    public class Payment1
    {
        public long CardNumber { get; set; }
        public required string CardholderName { get; set; }
        public int ExpirationMonth { get; set; } // Add month
        public int ExpirationYear { get; set; }  // Add year
        public int Cvv { get; set; }

        // Optionally, you can add a computed property for full expiration date
        public DateTime ExpirationDate => new DateTime(ExpirationYear, ExpirationMonth, 1).AddMonths(1).AddDays(-1);

    }
}
