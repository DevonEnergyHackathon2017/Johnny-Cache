﻿using PipeTallyMobile.Models;
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
                
                _database.CreateTableAsync<Measurement>().Wait();
                _database.CreateTableAsync<MeasureBatch>().Wait();
            }
            catch(AggregateException aex)
            {
                throw;
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public Task<List<MeasureBatch>> GetBatches()
        {
            return _database.Table<MeasureBatch>().ToListAsync();
        }

        public async Task<MeasureBatch> GetFullBatch(int batchID)
        {
            var batch = await _database.GetAsync<MeasureBatch>(batchID);
            var measures = await _database.Table<Measurement>().Where(m => m.MeasureBatchID == batchID).ToListAsync();
            batch.Measurements = new List<Measurement>(measures);

            return batch;
        }

        public void StoreFullBatch(MeasureBatch batch)
        {
            _database.InsertOrReplaceAsync(batch);
            _database.InsertAllAsync(batch.Measurements);
        }
    }
}
