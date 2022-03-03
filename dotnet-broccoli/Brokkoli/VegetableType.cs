using System.ComponentModel.DataAnnotations;

namespace Brokkoli
{
    public class VegetableType
    {
        [Required]
        public int Id { get; set; }

        [StringLength(20)]
        public string VegetableName { get; set; } = string.Empty;
    }
}
