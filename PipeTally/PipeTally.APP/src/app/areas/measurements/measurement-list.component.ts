import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "primeng/components/common/api";
import { MessageService } from "../../services/message.service";
import { BusyService } from "../../services/busy.service";
import { MeasurementModel } from "../../models/measurement-model";
import { MeasurementService } from "../../services/measurement.service";


@Component({
  selector: "app-measurement-list",
  templateUrl: "./measurement-list.component.html"
})
export class MeasurementListComponent implements OnInit {
  public MeasurementType: MeasurementModel[];

  constructor(
    private _router: Router,
    private _jobSiteSvc: MeasurementService,
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
        this.MeasurementType = x;
        this.messageSvc.AddInfo("measurement list", x.length + " items found.");
      },
      error => {
        this._busySvc.SetFree();
        this.messageSvc.AddError("measurement list", error);
      });
  }

  public CanCreate: boolean = false;

  ngOnInit() {
    this.Reload();
  }

  onRowSelect(event) {
    var jobIdentType = event.data as MeasurementModel;
    this._router.navigate(["/measurement-read", jobIdentType.MeasurementId]);
  }
}
