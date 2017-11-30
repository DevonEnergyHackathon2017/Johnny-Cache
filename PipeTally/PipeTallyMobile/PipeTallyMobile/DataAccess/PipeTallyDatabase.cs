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
            _database = new SQLiteAsyncConnection(dbPath);
            _database.CreateTableAsync<Measurement>().Wait();
            _database.CreateTableAsync<MeasureBatch>().Wait();
        }

        public Task<List<MeasureBatch>> GetBatches()
        {
            return _database.Table<MeasureBatch>().ToListAsync();
        }

        public Task<List<Measurement>> GetMeasurementForBatch(int measureBatchID)
        {
            return _database.Table<Measurement>().Where(m => m.MeasureBatchID == measureBatchID).ToListAsync();
        }

        public void StoreMeasureBatch(MeasureBatch batch)
        {
            _database.InsertOrReplaceAsync(batch);
        }

        public void StoreMeasurement(Measurement measure)
        {
            _database.InsertOrReplaceAsync(measure);
        }
    }
}
