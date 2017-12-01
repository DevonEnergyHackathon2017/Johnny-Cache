using PipeTallyMobile.Models;
using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PipeTallyMobile.DataAccess
{
    public class PipeTallyDatabase
    {
        private SQLiteAsyncConnection _database;

        public PipeTallyDatabase(string dbPath)
        {
            try
            {
                _database = new SQLiteAsyncConnection(dbPath);
                _database.CreateTablesAsync<Measurement, MeasureBatch>().Wait();
            }
            catch(Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " at " + ex.StackTrace);
                throw;
            }
        }

        public Task<List<MeasureBatch>> GetBatches()
        {
            return _database.Table<MeasureBatch>().ToListAsync();
        }

        public Task<List<MeasureBatch>> GetBatchesToUpload()
        {
            return _database.Table<MeasureBatch>().Where(b => b.Uploaded == false).ToListAsync();
        }

        public async Task<MeasureBatch> GetBatch(int batchID)
        {
            var batch = await _database.GetAsync<MeasureBatch>(batchID);
            return batch;
        }

        public async Task<List<Measurement>> GetMeasurementsForBatch(int batchID)
        {
            var measures = await _database.Table<Measurement>().Where(m => m.MeasureBatchID == batchID).ToListAsync();
            return measures;
        }

        public void UpdateBatch(MeasureBatch batch)
        {
            _database.UpdateAsync(batch);
        }

        public void StoreFullBatch(MeasureBatch batch, List<Measurement> measurements)
        {
            var cnt = _database.InsertAsync(batch).Result;
            foreach(var m in measurements) { m.MeasureBatchID = batch.ID; }

            _database.InsertAllAsync(measurements);
        }
    }
}
