import { JobSiteModel } from "./job-site-model";

export class MeasurementModel {
    public MeasurementId: number;
    public JobSiteId: number;
    public Joint: number;
    public PipeLength: number;
    public ThreadLength: number;
    public ItemDescription: string;
    public TopThread: string;
    public IsDamaged: boolean;
    public JobSite: JobSiteModel
}
