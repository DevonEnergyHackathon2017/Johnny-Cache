using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PipeTallyMobile.Models
{
    public class GlobalSettings
    {
        public bool UseImperial { get; set; }
        public string ServiceURL { get; private set; }

        public GlobalSettings()
        {
            UseImperial = true;
            ServiceURL = "";
        }
    }
}
