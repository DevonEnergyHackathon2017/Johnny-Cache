import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { JobSiteModel } from "../../models/job-site-model";
import { JobSiteService } from "../../services/job-site.service";
import { BusyService } from "../../services/busy.service";

@Component({
  selector: "app-job-site-read",
  templateUrl: "./job-site-read.component.html"
})
export class JobSiteReadComponent implements OnInit {
  public entity: JobSiteModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jobSiteService: JobSiteService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteService.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddInfo("job site read", "The job site was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site read", error);
      });
  }
}
