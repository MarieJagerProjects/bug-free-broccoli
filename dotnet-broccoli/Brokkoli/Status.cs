using System.ComponentModel.DataAnnotations;

namespace Brokkoli
{
    public class Status
    {
        [Required]
        public int Id { get; set; }

        [StringLength(20)]
        public string StatusOption { get; set; } = string.Empty;
    }
}
