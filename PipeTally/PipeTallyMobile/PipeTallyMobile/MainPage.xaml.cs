using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace PipeTallyMobile
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void OnStartNewSession(object sender, EventArgs e)
        {
            var startNewPage = new StartNewPage();
            this.Navigation.PushAsync(startNewPage, true);
        }
    }
}
