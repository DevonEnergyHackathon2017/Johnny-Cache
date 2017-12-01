using SQLite;

namespace PipeTallyMobile.Models
{
    public class Measurement
    {
        [PrimaryKey, AutoIncrement]
        public int ID { get; set; }

        public int MeasureBatchID { get; set; }
        public int Order { get; set; }
        public double FullLength { get; set; }
        public double ThreadLength { get; set; }
    }
}