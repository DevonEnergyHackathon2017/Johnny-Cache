using PipeTallyMobile.DataAccess;
using PipeTallyMobile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Xamarin.Forms;

namespace PipeTallyMobile
{
    public partial class App : Application
    {
        static PipeTallyDatabase database;
        public GlobalSettings Settings { get; private set; }

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

        }

        protected override void OnSleep()
        {
            //pause background upload thread
        }

        protected override void OnResume()
        {
            //restart background upload thread
        }
    }
}
