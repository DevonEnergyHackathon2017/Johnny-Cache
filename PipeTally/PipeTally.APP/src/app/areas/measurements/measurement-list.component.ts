import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "primeng/components/common/api";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";

import { JobSiteModel } from "../../models/job-site-model";
import { MeasurementModel } from "../../models/measurement-model";

import { MeasurementService } from "../../services/measurement.service";
import { JobSiteService } from "../../services/job-site.service";

@Component({
  selector: "app-measurement-list",
  templateUrl: "./measurement-list.component.html"
})
export class MeasurementListComponent implements OnInit {
  public Measurements: MeasurementModel[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jobSiteSvc: JobSiteService,
    private _measurementSvc: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public Reload() {
    this._busySvc.SetBusy();
    this._measurementSvc
      .Query()
      .Filter(`JobSiteId eq ${this.jobSite.JobSiteId}`)
      .OrderBy("Joint desc")
      .Exec()
      .subscribe(x => {
        this._busySvc.SetFree();
        this.Measurements = x;
        this.messageSvc.AddInfo("measurement list", x.length + " items found.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement list", error);
      });
  }

  public jobSite: JobSiteModel;
  
  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteSvc.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.jobSite = x;
        this.messageSvc.AddInfo("measurement list", "The job site was loaded successfully.");

        this.Reload();
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement list", error);
      });
  }

  onRowSelect(event) {
    var jobIdentType = event.data as MeasurementModel;
    this._router.navigate(["/measurement-read", jobIdentType.MeasurementId]);
  }

  onReorder() {
    var n = this.Measurements.length;
    for(var i = 0; i < n; i++) {
      var measure = this.Measurements[i];
      measure.Joint = n - i;
    }
  }

  public Save() {
    this.jobSite.Measurements = this.Measurements;

    this._busySvc.SetBusy();
    this._jobSiteSvc.Patch(this.jobSite, this.jobSite.JobSiteId)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("measurement list", "The measurement order was changed successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement list", error);
      });
  }
}
