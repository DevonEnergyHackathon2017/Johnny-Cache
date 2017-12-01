import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ODataService } from "angular-odata-es5";
import { PipeTallyODataConfiguration } from "./pipetally-odata-configuration";
import { JobSiteModel } from "../models/job-site-model";

@Injectable()
export class JobSiteService extends ODataService<JobSiteModel> {
    constructor(http: HttpClient, config: PipeTallyODataConfiguration) {
        super("JobSite", http, config);
    }
}
