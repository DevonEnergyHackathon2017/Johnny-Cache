using PipeTallyMobile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace PipeTallyMobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class StartNewPage : ContentPage
    {
        public StartNewPage()
        {
            InitializeComponent();
        }
        
        private void OnStartMeasure(object sender, EventArgs e)
        {
            var batch = new MeasureBatch();

            //gather data
            batch.Grade = txtGrade.Text;
            batch.I_D = float.Parse(txtID.Text);
            batch.OD = float.Parse(txtOD.Text);
            batch.TopThread = txtThread.Text;
            batch.Weight = int.Parse(txtWeight.Text);
            //batch.Measurements = new List<Measurement>();

            var measurePage = new CollectMeasurePage(batch);
            this.Navigation.PushAsync(measurePage, true);
        }

        private void txtOD_Completed(object sender, EventArgs e)
        {
            txtWeight.Focus();
        }

        private void txtWeight_Completed(object sender, EventArgs e)
        {
            txtGrade.Focus();
        }

        private void txtGrade_Completed(object sender, EventArgs e)
        {
            txtID.Focus();
        }

        private void txtID_Completed(object sender, EventArgs e)
        {
            txtThread.Focus();
        }

        private void txtThread_Completed(object sender, EventArgs e)
        {
            Unfocus();
        }
    }
}