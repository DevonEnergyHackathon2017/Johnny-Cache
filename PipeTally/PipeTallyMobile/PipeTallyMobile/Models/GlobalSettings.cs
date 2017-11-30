using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PipeTallyMobile.Models
{
    public enum UOMType
    {
        METRIC,
        IMPERIAL
    }

    class GlobalSettings
    {
        public UOMType Uom { get; set; }

        public GlobalSettings()
        {
            Uom = UOMType.IMPERIAL;
        }
    }
}
