namespace PipeTally.DataModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("JobSite")]
    public partial class JobSite
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public JobSite()
        {
            Measurements = new HashSet<Measurement>();
        }

        public int JobSiteId { get; set; }

        [StringLength(100)]
        public string Title { get; set; }

        public double? Latitude { get; set; }

        public double? Longitude { get; set; }

        public double? TotalWeight { get; set; }

        public double? PipeDiameter { get; set; }

        [StringLength(100)]
        public string ThreadType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Measurement> Measurements { get; set; }
    }
}
