import { Component, Input } from "@angular/core";
import { JobSiteModel } from "../../../models/job-site-model";

@Component({
  selector: "app-job-site-view",
  templateUrl: "./job-site-view.component.html"
})
export class JobSiteViewComponent {
  @Input() entity: JobSiteModel;
}
