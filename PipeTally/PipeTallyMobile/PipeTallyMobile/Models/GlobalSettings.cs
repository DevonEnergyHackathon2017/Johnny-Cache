#define local
namespace PipeTallyMobile.Models
{ 
    public class GlobalSettings
    {
        public bool UseImperial { get; set; }
        public string ServiceURL { get; private set; }

        public GlobalSettings()
        {
            UseImperial = true;
#if local
            ServiceURL = "http://localhost:65095";
#else
            ServiceURL = "";
#endif
        }
    }
}
