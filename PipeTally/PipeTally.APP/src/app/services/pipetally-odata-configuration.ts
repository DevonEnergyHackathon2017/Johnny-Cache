import { NgModule, Injectable } from "@angular/core";
import { ODataConfiguration } from "angular-odata-es5";
import { environment } from "../../environments/environment";

@Injectable()
export class PipeTallyODataConfiguration extends ODataConfiguration {
    public baseUrl: string;
    public resource: string;

    constructor() {
        super();

        if (!environment) { return; }
        if (!environment.odataConfig) { return; }

        var i = 0;
        var n = environment.odataConfig.length;
        var found = false;
        while (i < n && !found) {
            var config = environment.odataConfig[i];
            if (config.name === "PipeTally") {
                this.baseUrl = config.baseUrl;
                this.resource = config.resource;
                found = true;
            } else {
                i++;
            }
        }
    }
}
