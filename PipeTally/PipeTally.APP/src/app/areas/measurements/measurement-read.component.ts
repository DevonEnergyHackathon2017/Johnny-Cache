import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementService } from "../../services/measurement.service";
import { BusyService } from "../../services/busy.service";

@Component({
  selector: "app-measurement-read",
  templateUrl: "./measurement-read.component.html"
})
export class MeasurementReadComponent implements OnInit {
  public entity: MeasurementModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jobSiteService: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._jobSiteService.Get(+params["id"]).Expand("JobSite").Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddInfo("measurement read", "The measurement was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement read", error);
      });
  }
}
