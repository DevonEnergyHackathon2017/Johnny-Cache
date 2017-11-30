import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { JobSiteModel } from "../../models/job-site-model";
import { JobSiteService } from "../../services/job-site.service";
import { BusyService } from "../../services/busy.service";

@Component({
  selector: "app-home-read",
  templateUrl: "./home-read.component.html"
})
export class HomeReadComponent implements OnInit {
  public entity: JobSiteModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jobSiteService: JobSiteService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public CanUpdate: boolean = false;
  public CanDelete: boolean = false;

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
