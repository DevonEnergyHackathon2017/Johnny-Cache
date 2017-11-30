using PipeTally.DataModel;
using System.Linq;

namespace PipeTally.Services
{
    public interface IMeasurementService
    {
        Measurement Create(Measurement entity);
        IQueryable<Measurement> Read();
        bool Update(Measurement entity);
        bool Delete(int key);
    }
}
