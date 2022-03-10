using Microsoft.EntityFrameworkCore;

namespace Brokkoli.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Auction> Auctions { get; set; } = null!;
        public DbSet<VegetableType> VegetableTypes { get; set; } = null!;
        public DbSet<Status> Statuses { get; set; } = null!;
        public DbSet<QualityType> QualityTypes { get; set; } = null!;
    }
}
