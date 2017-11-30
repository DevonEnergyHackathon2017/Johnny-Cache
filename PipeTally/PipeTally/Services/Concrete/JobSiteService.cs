using PipeTally.DataModel;
using System;
using System.Linq;

namespace PipeTally.Services
{
    public class JobSiteService : IJobSiteService
    {
        private readonly IDataModel _data;
        private readonly IMeasurementService _measurementSvc;

        private void ProcessMeasurement(Measurement entity)
        {
            if (entity == null) { return; }

            if (_data.Measurements.Any(x => x.MeasurementId == entity.MeasurementId))
            {
                if (!_measurementSvc.Update(entity)) { throw new ApplicationException($"Measurement {entity.MeasurementId} not found."); }
            }
            else
            {
                _measurementSvc.Create(entity);
            }
        }

        public JobSiteService(IDataModel data, IMeasurementService measurementSvc)
        {
            _data = data;
            _measurementSvc = measurementSvc;
        }

        public JobSite Create(JobSite entity)
        {
            if (entity == null) { throw new ArgumentNullException(nameof(entity)); }
            _data.JobSites.Add(entity);

            if (entity.Measurements != null)
            {
                foreach(var measurement in entity.Measurements)
                {
                    _measurementSvc.Create(measurement);
                }
            }

            return entity;
        }

        public IQueryable<JobSite> Read()
        {
            return _data.JobSites;
        }

        public bool Update(JobSite entity)
        {
            if (entity == null) { throw new ArgumentNullException(nameof(entity)); }

            var r = _data.JobSites.Find(entity.JobSiteId);
            if (r == null) { return false; }
            _data.Entry(r).CurrentValues.SetValues(entity);

            if (entity.Measurements != null)
            {
                foreach (var measurement in entity.Measurements)
                {
                    measurement.JobSiteId = r.JobSiteId;
                    measurement.JobSite = r;
                    ProcessMeasurement(measurement);
                }

                var newMeasurementIds = entity.Measurements.Select(x => x.MeasurementId);
                var deleteMeasurements = r.Measurements.Where(x => !newMeasurementIds.Contains(x.MeasurementId)).ToArray();
                foreach (var measurement in deleteMeasurements)
                {
                    _measurementSvc.Delete(measurement.MeasurementId);
                }
            }

            return true;
        }

        public bool Delete(int key)
        {
            var r = _data.JobSites.Find(key);
            if (r == null) { return false; }

            /* Delete measurements. */
            foreach (var measurementKey in r.Measurements.Select(x => x.MeasurementId).ToArray())
            {
                _measurementSvc.Delete(measurementKey);
            }

            _data.JobSites.Remove(r);

            return true;
        }
    }
}