using PipeTally.DataModel;
using System;
using System.Linq;

namespace PipeTally.Services
{
    public class JobSiteService : IJobSiteService
    {
        private readonly IDataModel _data;
        private readonly IMeasurementService _measurementSvc;

        public JobSiteService(IDataModel data, IMeasurementService measurementSvc)
        {
            _data = data;
            _measurementSvc = measurementSvc;
        }

        public JobSite Create(JobSite entity)
        {
            if (entity == null) { throw new ArgumentNullException(nameof(entity)); }
            _data.JobSites.Add(entity);
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