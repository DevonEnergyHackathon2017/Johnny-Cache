import { Component } from "@angular/core";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementService } from "../../services/measurement.service";
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: "home-measurement",
  templateUrl: "./home-measurements.component.html"
})
export class MeasurementListComponent {

    measurements : MeasurementModel[];
    measurementservice : MeasurementService;
    constructor(tmeasurementservice : MeasurementService){
        this.measurementservice = tmeasurementservice;
    }
    cols: any[];    

    ngOnInit() {
        this.measurementservice.Query().ExecWithCount().subscribe(x=> {
            this.measurements = x.data;
            console.log(this.measurements);
        });

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

 }