using PipeTally.DataModel;
using PipeTally.Services;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.OData;

namespace PipeTally.Controllers
{
    public class MeasurementController : ODataController
    {
        private readonly IMeasurementService _MeasurementSvc;
        private readonly IDataModel _data;

        public MeasurementController(IMeasurementService MeasurementSvc, IDataModel data)
        {
            _MeasurementSvc = MeasurementSvc;
            _data = data;
        }

        public IHttpActionResult Post([FromBody]Measurement entity)
        {
            try
            {
                _MeasurementSvc.Create(entity);
                _data.SaveChanges();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Created(entity);
        }

        [EnableQuery]
        public IQueryable<Measurement> Get()
        {
            return _MeasurementSvc.Read();
        }

        [EnableQuery]
        public SingleResult<Measurement> Get([FromODataUri] int key)
        {
            return SingleResult.Create(_MeasurementSvc.Read().Where(x => x.MeasurementId == key));
        }

        public IHttpActionResult Patch([FromBody]Measurement entity)
        {
            try
            {
                if (!_MeasurementSvc.Update(entity)) { return NotFound(); }
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
                if (!_MeasurementSvc.Delete(key)) { return NotFound(); }
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