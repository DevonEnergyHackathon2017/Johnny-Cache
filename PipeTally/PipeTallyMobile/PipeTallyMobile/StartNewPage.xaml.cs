using PipeTallyMobile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Collections;
using PipeTallyMobile.DataAccess;
using Plugin.Geolocator.Abstractions;
using Plugin.Geolocator;

namespace PipeTallyMobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class StartNewPage : ContentPage
    {
        public StartNewPage()
        {
            InitializeComponent();

            pckGrade.ItemsSource = ReferenceDataLoader.BuildGradeList();
            pckThread.ItemsSource = ReferenceDataLoader.BuildThreadList();
            pckInnerDiam.ItemsSource = ReferenceDataLoader.BuildInnerDiamList();
            pckOuterDiam.ItemsSource = ReferenceDataLoader.BuildOuterDiamList();
            pckWeight.ItemsSource = ReferenceDataLoader.BuildWeightList();
            pckSiteName.ItemsSource = ReferenceDataLoader.BuildSiteNameList();
        }

        private void OnStartMeasure(object sender, EventArgs e)
        {
            var batch = new MeasureBatch();

            //gather data
            try
            {
                batch.Grade = pckGrade.SelectedItem.ToString();
                batch.InnerDiameter = float.Parse(pckInnerDiam.SelectedItem.ToString());
                batch.OuterDiameter = float.Parse(pckOuterDiam.SelectedItem.ToString());
                batch.TopThread = pckThread.SelectedItem.ToString();
                batch.Weight = int.Parse(pckWeight.SelectedItem.ToString());
                batch.SiteName = pckSiteName.SelectedItem.ToString();
                batch.Uploaded = false;
                //batch.Measurements = new List<Measurement>();
                GetGeoLocation(batch);

                var measurePage = new CollectMeasurePage(batch);
                this.Navigation.PushAsync(measurePage, true);
            }
            catch(Exception ex)
            {
                return;
            }
        }

        private void GetGeoLocation(MeasureBatch batch)
        {
            Task.Run(GetCurrentLocation).ContinueWith(r =>
            {
                var position = r.Result;
                batch.Latitude = position.Latitude;
                batch.Longitude = position.Longitude;
            });
        }

        public async Task<Position> GetCurrentLocation()
        {
            Position position = null;
            try
            {
                var locator = CrossGeolocator.Current;
                locator.DesiredAccuracy = 100;

                position = await locator.GetLastKnownLocationAsync();

                if (position != null)
                {
                    //got a cahched position, so let's use it.
                    return position;
                }

                if (!locator.IsGeolocationAvailable || !locator.IsGeolocationEnabled)
                {
                    //not available or enabled
                    return null;
                }

                position = await locator.GetPositionAsync(TimeSpan.FromSeconds(20), null, true);

            }
            catch (Exception ex)
            {
                //Display error as we have timed out or can't get location.
                return null;
            }

            if (position == null)
                return null;

            return position;
        }

    }
}