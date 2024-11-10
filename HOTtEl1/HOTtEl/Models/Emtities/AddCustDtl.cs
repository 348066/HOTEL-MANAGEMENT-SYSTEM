namespace HOTtEl.Models.Emtities
{
    public class AddCustDtl
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public long contact { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string ConfirmPassword { get; set; }
    }

}
