import { Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { MeasurementService } from "../../services/measurement.service";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementEditComponent } from "./shared/measurement-edit.component";

@Component({
  selector: "app-measurement-create",
  templateUrl: "./measurement-create.component.html"
})
export class MeasurementCreateComponent implements OnInit {
  constructor(
    private _router: Router,
    private _jobSiteService: MeasurementService,
    public messageSvc: MessageService,
    private _busySvc: BusyService
  ) { }

  public entity: MeasurementModel = new MeasurementModel();

  @ViewChild(MeasurementEditComponent)
  private _edit: MeasurementEditComponent;

  public Save() {
    if (!this._edit.ReadForm()) { return; }
    
    this._busySvc.SetBusy();
    this._jobSiteService.Post(this.entity)
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
    this.messageSvc.AddSuccess("measurement type create", "The measurement type was reset.")
  }

  public CanCreate: boolean = false;

  ngOnInit() {
  }
}
