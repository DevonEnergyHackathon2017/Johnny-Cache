using PipeTallyMobile.DataAccess;
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

        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new PipeTallyMobile.MainPage());
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
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
