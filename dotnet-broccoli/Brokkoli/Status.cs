using System.ComponentModel.DataAnnotations;

namespace Brokkoli
{
    public class Status
    {
        [Required]
        public int Id { get; set; }

        [StringLength(20)]
        public string StatusName { get; set; } = string.Empty;

        [StringLength(5)]
        public string Abbreviation { get; set; } = string.Empty;

        public string StatusDescription { get; set; } = string.Empty;
    }
}
