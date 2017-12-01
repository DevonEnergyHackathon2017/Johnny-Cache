using Castle.DynamicProxy;
using log4net;
using System;
using System.Linq;
using System.Reflection;

namespace PipeTally
{
    public class LogInterceptor : IInterceptor
    {
        private static ILog _log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public void Intercept(IInvocation invocation)
        {
            _log.DebugFormat("Calling method {0}.{1} with parameters: [ {2} ]... ",
                invocation.InvocationTarget.ToString(),
                invocation.Method.Name,
                string.Join(", ", invocation.Arguments.Select(a => (a ?? "").ToString()).ToArray()));

            try
            {
                invocation.Proceed();
            }
            catch (AggregateException aex)
            {
                if (aex.InnerException != null)
                {
                    _log.Error(aex.InnerException.Message, aex.InnerException);
                }
                else
                {
                    _log.Error(aex.Message, aex);
                }
                throw;
            }
            catch (Exception ex)
            {
                _log.Error(ex.Message, ex);
                throw;
            }

            _log.DebugFormat("Done: result was {0}.", invocation.ReturnValue);
        }
    }
}