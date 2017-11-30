using PipeTallyMobile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Collections;

namespace PipeTallyMobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class StartNewPage : ContentPage
    {
        public StartNewPage()
        {
            InitializeComponent();

            pckGrade.ItemsSource = BuildGradeList();
            pckThread.ItemsSource = BuildThreadList();
            pckInnerDiam.ItemsSource = BuildInnerDiamList();
            pckOuterDiam.ItemsSource = BuildOuterDiamList();
            pckWeight.ItemsSource = BuildWeightList();
        }

        private IList BuildWeightList()
        {
            return new List<string>(new string[]
            { "18", "17", "16", "15", "14" });
        }

        private IList BuildOuterDiamList()
        {
            return new List<string>(new string[]
            { "7.0","6.5", "6.0", "5.5", "5.0", "4.5" });
        }

        private IList BuildInnerDiamList()
        {
            return new List<string>(new string[]
             { "6.82","6.21", "5.89", "5.22", "4.89", "4.27" });
        }

        private List<string> BuildThreadList()
        {
            return new List<string>(new string[]
            { "CDC-HTQ", "Buttress" });
        }

        private List<string> BuildGradeList()
        {
            return new List<string>(new string[]
            { "P110RY", "P110EC", "P110MS", "Q125HC" });

        }

        private void OnStartMeasure(object sender, EventArgs e)
        {
            var batch = new MeasureBatch();

            //gather data
            batch.Grade = pckGrade.SelectedItem.ToString();
            batch.InnerDiameter = float.Parse(pckInnerDiam.SelectedItem.ToString());
            batch.OuterDiameter = float.Parse(pckOuterDiam.SelectedItem.ToString());
            batch.TopThread = pckThread.SelectedItem.ToString();
            batch.Weight = int.Parse(pckWeight.SelectedItem.ToString());
            //batch.Measurements = new List<Measurement>();

            var measurePage = new CollectMeasurePage(batch);
            this.Navigation.PushAsync(measurePage, true);
        }
    }
}