using Autofac;
using Autofac.Extras.DynamicProxy;
using Autofac.Integration.WebApi;
using Owin;
using PipeTally.DataModel;
using System.Reflection;
using System.Web.Http;

namespace PipeTally
{
    public partial class Startup
    {
        public void ConfigureDI(IAppBuilder app, HttpConfiguration config)
        {
            var builder = new ContainerBuilder();

            /* Register Types */
            builder.Register(c => new LogInterceptor());
            builder.RegisterType<PipeTallyDataModel>().As<IDataModel>().EnableInterfaceInterceptors().InterceptedBy(typeof(LogInterceptor)).InstancePerLifetimeScope();

            /* Register Web API Controllers */
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            /* Set the Dependency Resolver to be Autofac */
            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);
        }
    }
}