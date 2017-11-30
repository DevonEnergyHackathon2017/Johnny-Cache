using Owin;
using PipeTally.DataModel;
using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using System.Web.OData.Query;

namespace PipeTally
{
    public partial class Startup
    {
        public void ConfigureRouting(IAppBuilder app, HttpConfiguration config)
        {
            /* standard WebAPI routes */
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config
                .Select(QueryOptionSetting.Allowed)
                .Filter(QueryOptionSetting.Allowed)
                .OrderBy(QueryOptionSetting.Allowed)
                .Count(QueryOptionSetting.Allowed)
                .Expand(QueryOptionSetting.Allowed)
                .MaxTop(100);

            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.Namespace = "PipeTally";

            builder.EntitySet<JobSite>("JobSite");
            builder.EntitySet<Measurement>("Measurement");

            config.MapODataServiceRoute(
                routeName: "ODataRoute",
                routePrefix: null,
                model: builder.GetEdmModel());

            app.UseWebApi(config);
        }
    }
}