using System.ComponentModel.DataAnnotations;

namespace Brokkoli
{
    public class Auction
    {

        [Required]
        public int Id { get; set; }

        [StringLength(20)] [Required]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string? Description { get; set; }

        [Required]
        public int VegetableTypeId { get; set; }

        public VegetableType? VegetableType { get; set; }


    }
}
