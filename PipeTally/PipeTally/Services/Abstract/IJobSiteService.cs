using System.Linq;
using PipeTally.DataModel;

namespace PipeTally.Services.Abstract
{
    public interface IJobSiteService
    {
        JobSite Create(JobSite entity);
        IQueryable<JobSite> Read();
        bool Update(JobSite entity);
        bool Delete(int key);
    }
}
