import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "primeng/components/common/api";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { JobSiteModel } from "../../models/job-site-model";
import { JobSiteService } from "../../services/job-site.service";

@Component({
  selector: "app-job-site-delete",
  templateUrl: "./job-site-delete.component.html"
})
export class JobSiteDeleteComponent implements OnInit {
  public msgs: Message[] = [];
  public entity: JobSiteModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jobSiteSvc: JobSiteService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public CanDelete: boolean = false;

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteSvc.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.msgs.push({ severity: "warn", summary: "Confirm", detail: "Are you sure you want to delete this job site?" });
        this.entity = x;
        this.messageSvc.AddInfo("job site delete", "The job site was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site delete", error);
      });
  }

  public Confirm() {
    this._busySvc.SetBusy();
    this._jobSiteSvc.Delete(this.entity.JobSiteId)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("job site delete", "The job site was deleted successfully.");
        this._router.navigate(["/job-site-list"]);
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site delete", error);
      });
  }
}
