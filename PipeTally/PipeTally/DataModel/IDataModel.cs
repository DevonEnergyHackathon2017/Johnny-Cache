using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace PipeTally.DataModel
{
    public interface IDataModel
    {
        DbSet<JobSite> JobSites { get; set; }
        DbSet<Measurement> Measurements { get; set; }

        int SaveChanges();

        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}
