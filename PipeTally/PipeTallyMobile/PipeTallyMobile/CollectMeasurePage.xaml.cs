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
    public partial class CollectMeasurePage : ContentPage
    {
        private MeasureBatch _batch;

        public CollectMeasurePage(MeasureBatch batch)
        {
            InitializeComponent();
            this.Appearing += CollectMeasurePage_Appearing;
            _batch = batch;
        }

        private void CollectMeasurePage_Appearing(object sender, EventArgs e)
        {
            this.txtFullLength.Focus();
        }

        private void OnAdvance(object sender, EventArgs e)
        {
            var fullLength = !string.IsNullOrWhiteSpace(this.txtFullLength.Text);
            var threadLength = !string.IsNullOrWhiteSpace(this.txtThreadLength.Text);

            if (!fullLength && !threadLength)
            {
                txtFullLength.Focus();
            }
            else if (fullLength && !threadLength)
            {
                txtThreadLength.Focus();
            }
            else if (fullLength && threadLength)
            {
                //save the measurement and continue to next pipe.
                var measure = new Measurement();
                measure.FullLength = double.Parse(txtFullLength.Text);
                measure.ThreadLength = double.Parse(txtThreadLength.Text);
                measure.Order = _batch.Measurements.Count() + 1;
                _batch.Measurements.Add(measure);

                App.Database.StoreFullBatch(_batch);

                txtFullLength.Text = null;
                txtThreadLength.Text = null;

                txtFullLength.Focus();
            }

            this.lblCount.Text = $"Collected {_batch.Measurements.Count()} measurements";
        }

        private void OnFinished(object sender, EventArgs e)
        {
            //save data. Nav back to empty nav stack.
            this.Navigation.PopToRootAsync(true);
        }

        private void txtFullLength_Completed(object sender, EventArgs e)
        {
            txtThreadLength.Focus();
        }

        private void txtThreadLength_Completed(object sender, EventArgs e)
        {
            Unfocus();
        }
    }
}