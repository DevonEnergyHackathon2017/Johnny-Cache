import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { JobSiteModel } from "../../models/job-site-model";
import { JobSiteService } from "../../services/job-site.service";
import { HomeEditComponent } from "./shared/home-edit.component";

@Component({
  selector: "app-home-update",
  templateUrl: "./home-update.component.html"
})
export class HomeUpdateComponent implements OnInit {
  public entity: JobSiteModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jobSiteSvc: JobSiteService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  @ViewChild(HomeEditComponent) private _edit: HomeEditComponent;

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteSvc.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddInfo("job site update", "The job site was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site update", error);
      });

  }

  public Save() {
    if (!this._edit.ReadForm()) { return; }

    this._busySvc.SetBusy();
    this._jobSiteSvc.Patch(this.entity, this.entity.JobSiteId)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("job site update", "The job site was saved successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site update", error);
      });
  }

  public Reset() {
    if (this.entity == null) { return; }

    this._busySvc.SetBusy();
    this._jobSiteSvc.Get(this.entity.JobSiteId)
      .Exec()
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddSuccess("job site update", "job site was reset successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site update", error);
      });
  }
}
