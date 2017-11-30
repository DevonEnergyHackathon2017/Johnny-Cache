using Owin;
using System.Web.Http;

namespace PipeTally
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            ConfigureCors(app);
            ConfigureDI(app, config);
            ConfigureRouting(app, config);
        }
    }
}