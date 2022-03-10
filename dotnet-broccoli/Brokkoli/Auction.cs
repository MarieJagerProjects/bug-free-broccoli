using System.ComponentModel.DataAnnotations;

namespace Brokkoli
{
    public class Auction
    {

        [Required]
        public int Id { get; set; }

        [Required]
        public int StatusId { get; set; }

        public Status? Status { get; set; }

        [StringLength(200)]
        public string? Description { get; set; }

        [Required]
        public int VegetableTypeId { get; set; }

        public VegetableType? VegetableType { get; set; }

        [Required]
        public int QualityTypeId { get; set; }
        
        public QualityType? QualityType { get; set; }

        public int Quantity { get; set; }
    }
}
