import { Component } from "@angular/core";
import { JobSiteService } from "../../services/job-site.service";
import { JobSiteModel } from "../../models/job-site-model";
import { DataTableModule, SharedModule } from 'primeng/primeng';


@Component({
    selector: "home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    jobsites: JobSiteModel[];
    cols: any[];
    job: JobSiteModel;



    displayDialog: boolean;

    selectedJobSite: JobSiteModel;

    newCar: boolean;

    jobsite: JobSiteModel[];

    constructor(private jobSiteService: JobSiteService) { }

    ngOnInit() {
        this.jobSiteService.Query().ExecWithCount().subscribe(x => {
            this.jobsites = x.data;
            console.log(this.jobsites);
        });

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

    }

    showDialogToAdd() {
        this.newCar = true;
        this.job = new JobSiteModel();
        this.displayDialog = true;
    }

    save() {
        let cars = [...this.jobsite];
        if (this.newCar)
            cars.push(this.job);
        else
            cars[this.findSelectedCarIndex()] = this.job;

        this.jobsite = cars;
        this.job = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.jobsite = this.jobsite.filter((val, i) => i != index);
        this.job = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.job = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(j: JobSiteModel): JobSiteModel {
        let car = new JobSiteModel();
        for (let prop in j) {
            car[prop] = j[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.jobsite.indexOf(this.selectedJobSite);
    }
}
