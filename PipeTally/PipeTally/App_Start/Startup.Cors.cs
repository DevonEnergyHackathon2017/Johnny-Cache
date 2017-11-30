using Microsoft.Owin.Cors;
using Owin;

namespace PipeTally
{
    public partial class Startup
    {
        public void ConfigureCors(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
        }
    }
}