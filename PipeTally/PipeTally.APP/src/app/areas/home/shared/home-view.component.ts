import { Component, Input } from "@angular/core";
import { JobSiteModel } from "../../../models/job-site-model";


@Component({
  selector: "app-home-view",
  templateUrl: "./home-view.component.html"
})
export class HomeViewComponent {
  @Input() entity: JobSiteModel;
}
