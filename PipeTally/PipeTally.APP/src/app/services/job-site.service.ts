import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PipeTallyService } from "./pipe-tally.service";
import { PipeTallyODataConfiguration } from "./pipe-tally-odata-configuration";
import { JobSiteModel } from '../models/job-site-model';

@Injectable()
export class JobSiteService extends PipeTallyService<JobSiteModel> {
    constructor(http: HttpClient, config: PipeTallyODataConfiguration) {
        super("JobSite", http, config);
    }
}
