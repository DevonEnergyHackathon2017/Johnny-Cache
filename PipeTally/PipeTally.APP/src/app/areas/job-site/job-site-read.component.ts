import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "../../services/message.service";
import { JobSiteModel } from "../../models/job-site-model";
import { MeasurementModel } from "../../models/measurement-model";
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
        return this._jobSiteService.Get(+params["id"]).Expand("Measurements($orderby=Joint desc)").Exec();
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

  private ConvertToCSV(jobSite: JobSiteModel, measure: MeasurementModel): string {
    return `${measure.MeasurementId},${measure.Joint},${measure.PipeLength},${measure.ThreadLength},${measure.PipeLength - measure.ThreadLength},${measure.ItemDescription},${jobSite.OuterDiameter},${jobSite.TotalWeight},${jobSite.Grade},${jobSite.InnerDiameter},${jobSite.ThreadType}\r\n`;
  }

  private getCsv(jobSite: JobSiteModel): string {
    var response = "Run,Joint,P. Len.,T. Len.,Length,Item Description,OD,Weight,Grade,ID,Top Thread\r\n";
    for (var i = 0; i < jobSite.Measurements.length; i++) {
      response += this.ConvertToCSV(jobSite, jobSite.Measurements[i]);
    }
    return response;
  }

  public Export() {
    var csv = this.getCsv(this.entity);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.entity.Title + '.csv';
    a.click();
    return 'success';
  }
}
