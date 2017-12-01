namespace PipeTally.DataModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Measurement")]
    public partial class Measurement
    {
        public int MeasurementId { get; set; }

        public int JobSiteId { get; set; }

        public int? Joint { get; set; }

        public double? PipeLength { get; set; }

        public double? ThreadLength { get; set; }

        public string ItemDescription { get; set; }

        public string TopThread { get; set; }

        public bool? IsDamaged { get; set; }

        public virtual JobSite JobSite { get; set; }
    }
}
