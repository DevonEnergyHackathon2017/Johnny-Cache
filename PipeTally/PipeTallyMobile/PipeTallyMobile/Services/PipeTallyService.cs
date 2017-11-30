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
        public static async void UploadNewBatches()
        {
            var batches = await App.Database.GetBatchesToUpload();
            foreach (var batch in batches)
            {
                var measures = await App.Database.GetMeasurementsForBatch(batch.ID);
                var result =  await SendMeasurements(App.Settings.ServiceURL, batch, measures);
                batch.Uploaded = result;
                App.Database.UpdateBatch(batch);
            }
        }

        private async static Task<bool> SendMeasurements(string svcURL, MeasureBatch batch, List<Measurement> measurements)
        {
            var endpoint = svcURL + "JobSite";
            HttpClient client = new HttpClient();
            var data = Conversion(batch, measurements);
            
            var json = JsonConvert.SerializeObject(data);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var result = false;
            try
            {
                var response = await client.PostAsync(endpoint, content);
                if(response.StatusCode == System.Net.HttpStatusCode.OK || response.StatusCode == System.Net.HttpStatusCode.Created)
                {
                    result = true;
                }
                else
                {
                    System.Diagnostics.Debug.WriteLine(response.StatusCode + " - " + await response.Content.ReadAsStringAsync());
                    result = false;
                }
            }
            catch(Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " at " + ex.StackTrace);
                result = false;
            }

            return result;
        }

        private static JobSiteObject Conversion(MeasureBatch measureBatch, List<Measurement> measurements)
        {
            var jobSite = new JobSiteObject
            {
                Grade = measureBatch.Grade,
                OuterDiameter = measureBatch.OuterDiameter,
                InnerDiameter = measureBatch.InnerDiameter,
                TotalWeight = measureBatch.Weight,
                ThreadType = measureBatch.TopThread,
                Latitude = measureBatch.Latitude,
                Longitude = measureBatch.Longitude,
                Title = "",
                Measurements = convertMeasurements(measurements)
            };
            return jobSite;
        }

        private static IEnumerable<MeasurementObject> convertMeasurements(List<Measurement> measurements)
        {
            var measurmentObjectList = new List<MeasurementObject>();
            int jointNum = Int32.MaxValue;
            foreach (var measurement in measurements)
            {
                measurmentObjectList.Add(new MeasurementObject
                {
                    //IsDamaged = measurement.
                    ItemDescription = "Casing Joints",
                    Joint = --jointNum,
                    PipeLength = measurement.FullLength,
                    ThreadLength = measurement.ThreadLength,
                    //TopThread = measurement.

                });
            }
            return measurmentObjectList;
        }
    }


    public class MeasurementObject
    {
        public int? Joint { get; set; }

        public double? PipeLength { get; set; }

        public double? ThreadLength { get; set; }

        public string ItemDescription { get; set; }

        public string TopThread { get; set; }

        public bool? IsDamaged { get; set; }
    }

    public class JobSiteObject
    {
        public JobSiteObject()
        {
            Measurements = new List<MeasurementObject>();
        }

        public int JobSiteId { get; set; }

        public string Title { get; set; }

        public double? Latitude { get; set; }

        public double? Longitude { get; set; }

        public int? TotalWeight { get; set; }

        public string Grade { get; set; }

        public double? InnerDiameter { get; set; }

        public double? OuterDiameter { get; set; }

        public string ThreadType { get; set; }

        public IEnumerable<MeasurementObject> Measurements { get; set; }

        
    }
}
