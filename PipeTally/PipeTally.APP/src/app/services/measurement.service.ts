import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PipeTallyService } from "./pipe-tally.service";
import { PipeTallyODataConfiguration } from "./pipe-tally-odata-configuration";
import { MeasurementModel } from '../models/measurement-model';

@Injectable()
export class MeasurementService extends PipeTallyService<MeasurementModel> {
    constructor(http: HttpClient, config: PipeTallyODataConfiguration) {
        super("Measurement", http, config);
    }
}
