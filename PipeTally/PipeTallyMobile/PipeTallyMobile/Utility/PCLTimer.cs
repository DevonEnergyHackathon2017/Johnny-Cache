using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PipeTallyMobile.Utility
{
    internal delegate void TimerCallback(object state);

    internal sealed class PCLTimer : CancellationTokenSource, IDisposable
    {
        internal PCLTimer(TimerCallback callback, object state, int dueTime, int period)
        {
            Contract.Assert(period == -1, "This stub implementation only supports dueTime.");
            Task.Delay(dueTime, Token).ContinueWith((t, s) =>
            {
                var tuple = (Tuple<TimerCallback, object>)s;
                tuple.Item1(tuple.Item2);
            }, Tuple.Create(callback, state), CancellationToken.None,
                TaskContinuationOptions.ExecuteSynchronously | TaskContinuationOptions.OnlyOnRanToCompletion,
                TaskScheduler.Default);
        }

        public new void Dispose() { base.Cancel(); }
    }
}
