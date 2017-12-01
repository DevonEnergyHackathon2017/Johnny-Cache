import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "primeng/components/common/api";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementService } from "../../services/measurement.service";

@Component({
  selector: "app-measurement-delete",
  templateUrl: "./measurement-delete.component.html"
})
export class MeasurementDeleteComponent implements OnInit {
  public msgs: Message[] = [];
  public entity: MeasurementModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _jobSiteSvc: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public CanDelete: boolean = false;

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteSvc.Get(+params["id"]).Expand("JobSite").Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.msgs.push({ severity: "warn", summary: "Confirm", detail: "Are you sure you want to delete this measurement?" });
        this.entity = x;
        this.messageSvc.AddInfo("measurement delete", "The measurement was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement delete", error);
      });
  }

  public Confirm() {
    this._busySvc.SetBusy();
    this._jobSiteSvc.Delete(this.entity.MeasurementId)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("measurement delete", "The measurement was deleted successfully.");
        this._router.navigate(["/measurement-list", this.entity.JobSiteId]);
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement delete", error);
      });
  }
}
