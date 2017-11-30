import { JobSiteModel } from "./job-site-model";

export class MeasurementModel { 
    public MeasurementId: number;
    public JobSiteId: number;
    public PipeLength: number;
    public ThreadLength: number;
    public UseOrder: number;
    public IsDamaged: boolean;
    public JobSite: JobSiteModel;
}
