namespace PipeTallyMobile.Models
{ 
    public class GlobalSettings
    {
        public bool UseImperial { get; set; }
        public string ServiceURL { get; private set; }

        public GlobalSettings()
        {
            UseImperial = true;
#if LOCAL
            ServiceURL = "http://localhost:65095";
#else
            ServiceURL = "http://jc-pipetallyapi.azurewebsites.net/";
#endif
        }
    }
}
