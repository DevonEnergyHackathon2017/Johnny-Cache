import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementService } from "../../services/measurement.service";
import { MeasurementEditComponent } from "./shared/measurement-edit.component";

@Component({
  selector: "app-measurement-update",
  templateUrl: "./measurement-update.component.html"
})
export class MeasurementUpdateComponent implements OnInit {
  public entity: MeasurementModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _measurementSvc: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  @ViewChild(MeasurementEditComponent) private _edit: MeasurementEditComponent;

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(params => {
        this._busySvc.SetBusy();
        return this._measurementSvc.Get(+params["id"]).Exec();
      })
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddInfo("measurement update", "The measurement was loaded successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement update", error);
      });

  }

  public Save() {
    if (!this._edit.ReadForm()) { return; }

    this._busySvc.SetBusy();
    this._measurementSvc.Patch(this.entity, this.entity.MeasurementId)
      .subscribe(x => {
        this._busySvc.SetFree();
        this.messageSvc.AddSuccess("measurement update", "The measurement was saved successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement update", error);
      });
  }

  public Reset() {
    if (this.entity == null) { return; }

    this._busySvc.SetBusy();
    this._measurementSvc.Get(this.entity.MeasurementId)
      .Exec()
      .subscribe(x => {
        this._busySvc.SetFree();
        this.entity = x;
        this.messageSvc.AddSuccess("measurement update", "measurement was reset successfully.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement update", error);
      });
  }
}
