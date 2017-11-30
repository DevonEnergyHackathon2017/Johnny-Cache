using PipeTally.DataModel;
using PipeTally.Services;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.OData;
using PipeTally.Services.Abstract;

namespace PipeTally.Controllers
{
    public class JobSiteController : ODataController
    {
        private readonly IJobSiteService _JobSiteSvc;
        private readonly IDataModel _data;

        public JobSiteController(IJobSiteService JobSiteSvc, IDataModel data)
        {
            _JobSiteSvc = JobSiteSvc;
            _data = data;
        }

        public IHttpActionResult Post([FromBody]JobSite entity)
        {
            try
            {
                _JobSiteSvc.Create(entity);
                _data.SaveChanges();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Created(entity);
        }

        [EnableQuery]
        public IQueryable<JobSite> Get()
        {
            return _JobSiteSvc.Read();
        }

        [EnableQuery]
        public SingleResult<JobSite> Get([FromODataUri] int key)
        {
            return SingleResult.Create(_JobSiteSvc.Read().Where(x => x.JobSiteId == key));
        }

        public IHttpActionResult Patch([FromBody]JobSite entity)
        {
            try
            {
                if (!_JobSiteSvc.Update(entity)) { return NotFound(); }
                _data.SaveChanges();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Updated(entity);
        }

        public IHttpActionResult Delete(int key)
        {
            try
            {
                if (!_JobSiteSvc.Delete(key)) { return NotFound(); }
                _data.SaveChanges();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}