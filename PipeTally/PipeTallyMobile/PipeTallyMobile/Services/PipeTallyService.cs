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
    class PipeTallyService
    {
        public void SendMeasurements(string svcURL, MeasureBatch batch, List<Measurement> measures)
        {
            var endpoint = svcURL + "/Job";
            HttpClient client = new HttpClient();
            var data = new Object();
            var json = JsonConvert.SerializeObject(data);
            var content = new StringContent(json);

            client.PostAsync(endpoint, content).Start();
        }
    }
}
