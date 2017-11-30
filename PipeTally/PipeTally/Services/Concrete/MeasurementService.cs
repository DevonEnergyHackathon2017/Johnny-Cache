using PipeTally.DataModel;
using System;
using System.Linq;

namespace PipeTally.Services
{
    public class MeasurementService : IMeasurementService
    {
        private readonly IDataModel _data;

        public MeasurementService(IDataModel data)
        {
            _data = data;
        }

        public Measurement Create(Measurement entity)
        {
            if (entity == null) { throw new ArgumentNullException(nameof(entity)); }
            _data.Measurements.Add(entity);
            return entity;
        }

        public IQueryable<Measurement> Read()
        {
            return _data.Measurements;
        }

        public bool Update(Measurement entity)
        {
            if (entity == null) { throw new ArgumentNullException(nameof(entity)); }

            var r = _data.Measurements.Find(entity.MeasurementId);
            if (r == null) { return false; }
            _data.Entry(r).CurrentValues.SetValues(entity);

            return true;
        }

        public bool Delete(int key)
        {
            var r = _data.Measurements.Find(key);
            if (r == null) { return false; }

            _data.Measurements.Remove(r);

            return true;
        }
    }
}