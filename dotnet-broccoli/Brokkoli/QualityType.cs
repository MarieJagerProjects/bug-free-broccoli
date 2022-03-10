using System.ComponentModel.DataAnnotations;
namespace Brokkoli
{
    public class QualityType
    {
        [Required]
        public int Id { get; set; }

        [StringLength(20)]
        public string Quality { get; set; } = string.Empty;

        [StringLength(100)]
        public string Description { get; set; } = string.Empty;
    }
}
