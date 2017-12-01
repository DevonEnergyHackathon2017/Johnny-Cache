export class JobSiteModel {
    public JobSiteId: number;
    public Title: string;
    public Latitude: number;
    public Longitude: number;
    public TotalWeight: number;
    public Grade: string;
    public InnerDiameter: number;
    public OuterDiameter: number;
    public ThreadType: string;
    public Measurements: Array<any>;
}
