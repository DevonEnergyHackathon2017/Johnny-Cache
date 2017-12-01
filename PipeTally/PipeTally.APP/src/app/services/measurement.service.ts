import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ODataService } from "angular-odata-es5";
import { PipeTallyODataConfiguration } from "./pipetally-odata-configuration";
import { MeasurementModel } from "../models/measurement-model";

@Injectable()
export class MeasurementService extends ODataService<MeasurementModel> {
    constructor(http: HttpClient, config: PipeTallyODataConfiguration) {
        super("Measurement", http, config);
    }
}
