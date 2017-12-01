import { Component, ViewChild, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";

import { JobSiteModel } from "../../models/job-site-model";
import { MeasurementModel } from "../../models/measurement-model";

import { MeasurementService } from "../../services/measurement.service";
import { JobSiteService } from "../../services/job-site.service";

import { MeasurementEditComponent } from "./shared/measurement-edit.component";

@Component({
  selector: "app-measurement-create",
  templateUrl: "./measurement-create.component.html"
})
export class MeasurementCreateComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jobSiteSvc: JobSiteService,
    private _measurementSvc: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public jobSite: JobSiteModel;
  public entity: MeasurementModel = new MeasurementModel();

  @ViewChild(MeasurementEditComponent)
  private _edit: MeasurementEditComponent;

  public Save() {
    if (!this._edit.ReadForm()) {
      this.messageSvc.AddInfo("measurement create", "The measurement form is not valid.");
      return;
    }
    this._busySvc.SetBusy();
    this._measurementSvc.Post(this.entity)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("measurement create", "The measurement was created successfully.")
        this._router.navigate(["/measurement-read", x.MeasurementId]);
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement create", error)
      });
  }

  public Reset() {
    this.entity = new MeasurementModel();
    this.messageSvc.AddSuccess("measurement create", "The measurement type was reset.")
  }

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteSvc.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();

        this.jobSite = x;
        delete this.jobSite["@odata.context"];

        this.entity.JobSiteId = this.jobSite.JobSiteId;
        this.entity.JobSite = this.jobSite;
        this.messageSvc.AddInfo("measurement create", "The job site was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement create", error);
      });
  }
}
