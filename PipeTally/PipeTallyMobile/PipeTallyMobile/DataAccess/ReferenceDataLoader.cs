using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PipeTallyMobile.DataAccess
{
    public static class ReferenceDataLoader
    {

        public static List<string> BuildGradeList()
        {
            return new List<string>(new string[]
            { "P110RY", "P110EC", "P110MS", "Q125HC" });

        }

        public static List<string> BuildSiteNameList()
        {
            return new List<string>(new string[]
            { "Fox River 9 - Pad 3", "Beta 8 - Pad 2", "Cactus 13 - Pad 1", "Cactus 14 - Pad 1", "Echo 2 - Pad 1", "Sierra 13 - Pad 2" });
        }

        public static List<string> BuildWeightList()
        {
            return new List<string>(new string[]
            { "18", "17", "16", "15", "14" });
        }

        public static List<string> BuildOuterDiamList()
        {
            return new List<string>(new string[]
            { "7.0","6.5", "6.0", "5.5", "5.0", "4.5" });
        }

        public static List<string> BuildInnerDiamList()
        {
            return new List<string>(new string[]
             { "6.82","6.21", "5.89", "5.22", "4.89", "4.27" });
        }

        public static List<string> BuildThreadList()
        {
            return new List<string>(new string[]
            { "CDC-HTQ", "Buttress" });
        }

    }
}
