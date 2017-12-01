import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ODataService } from "angular-odata-es5";
import { PipeTallyODataConfiguration } from "./pipe-tally-odata-configuration";

@Injectable()
export abstract class PipeTallyService<T> extends ODataService<T> {
    constructor(typeName: string, http: HttpClient, protected odataConfig: PipeTallyODataConfiguration) {
        super(typeName, http, odataConfig);
    }
}
