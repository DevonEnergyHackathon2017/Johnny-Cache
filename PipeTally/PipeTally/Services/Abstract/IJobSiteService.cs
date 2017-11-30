using PipeTally.DataModel;
using System.Linq;

namespace PipeTally.Services
{
    public interface IJobSiteService
    {
        JobSite Create(JobSite entity);
        IQueryable<JobSite> Read();
        bool Update(JobSite entity);
        bool Delete(int key);
    }
}
