import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "primeng/components/common/api";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { JobSiteModel } from "../../models/job-site-model";
import { JobSiteService } from "../../services/job-site.service";


@Component({
  selector: "app-job-site-list",
  templateUrl: "./job-site-list.component.html"
})
export class JobSiteListComponent implements OnInit {
  public JobSiteType: JobSiteModel[];

  constructor(
    private _router: Router,
    private _jobSiteSvc: JobSiteService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public Reload() {
    this._busySvc.SetBusy();
    this._jobSiteSvc
      .Query()
      .Exec()
      .subscribe(x => {
        this._busySvc.SetFree();
        this.JobSiteType = x;
        this.messageSvc.AddInfo("job site list", x.length + " items found.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("job site list", error);
      });
  }

  public CanCreate: boolean = false;

  ngOnInit() {
    this.Reload();
  }

  onRowSelect(event) {
    var jobIdentType = event.data as JobSiteModel;
    this._router.navigate(["/job-site-read", jobIdentType.JobSiteId]);
  }
}
