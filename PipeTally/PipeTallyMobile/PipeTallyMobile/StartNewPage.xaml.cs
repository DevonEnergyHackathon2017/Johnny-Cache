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
            var measurePage = new CollectMeasurePage();
            this.Navigation.PushAsync(measurePage);
        }
    }
}