using PipeTallyMobile.DataAccess;
using PipeTallyMobile.Models;
using PipeTallyMobile.Services;
using PipeTallyMobile.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace PipeTallyMobile
{
    public partial class App : Application
    {
        static PipeTallyDatabase database;
        public static GlobalSettings Settings { get; private set; }

        private PCLTimer _timer;

        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new PipeTallyMobile.MainPage());
            Settings = new GlobalSettings();
        }

        public static PipeTallyDatabase Database
        {
            get
            {
                if (database == null)
                {
                    database = new PipeTallyDatabase(DependencyService.Get<IFileHelper>().GetLocalFilePath("PipeTallySQLite.db3"));
                }
                return database;
            }
        }

        protected override void OnStart()
        {
            //start background upload thread
            _timer = new PCLTimer(e => PipeTallyService.UploadNewBatches(), null, 400, -1);
        }

        protected override void OnSleep()
        {
            _timer.Cancel();
            
        }

        protected override void OnResume()
        {
            _timer = new PCLTimer(e => PipeTallyService.UploadNewBatches(), null, 400, -1);
        }
    }
}
