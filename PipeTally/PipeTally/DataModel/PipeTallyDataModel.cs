namespace PipeTally.DataModel
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class PipeTallyDataModel : DbContext, IDataModel
    {
        public PipeTallyDataModel()
            : base("name=PipeTally")
        {
        }

        public virtual DbSet<JobSite> JobSites { get; set; }
        public virtual DbSet<Measurement> Measurements { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobSite>()
                .HasMany(e => e.Measurements)
                .WithRequired(e => e.JobSite)
                .WillCascadeOnDelete(false);
        }
    }
}
