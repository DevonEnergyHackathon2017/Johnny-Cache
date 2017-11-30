using PipeTallyMobile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace PipeTallyMobile.Services
{
    public static class PipeTallyService
    {
        private static void SendMeasurements(string svcURL, MeasureBatch batch, List<Measurement> measures)
        {
            var endpoint = svcURL + "/Job";
            HttpClient client = new HttpClient();
            var data = new Object();
            var json = JsonConvert.SerializeObject(data);
            var content = new StringContent(json);

            client.PostAsync(endpoint, content).Start();
        }

        public static async void UploadNewBatches()
        {
            var batches = await App.Database.GetBatchesToUpload();
            foreach(var batch in batches)
            {
                var measures = await App.Database.GetMeasurementsForBatch(batch.ID);
                SendMeasurements(App.Settings.ServiceURL, batch, measures);
                batch.Uploaded = true;
                App.Database.UpdateBatch(batch);
            }
        }
    }
}
