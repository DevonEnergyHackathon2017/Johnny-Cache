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
                //batch.Measurements = new List<Measurement>();

                var measurePage = new CollectMeasurePage(batch);
                this.Navigation.PushAsync(measurePage, true);
            }
            catch(Exception ex)
            {
                return;
            }
        }
    }
}