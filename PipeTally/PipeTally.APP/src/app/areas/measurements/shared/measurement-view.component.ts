import { Component, Input } from "@angular/core";
import { MeasurementModel } from "../../../models/measurement-model";

@Component({
  selector: "app-measurement-view",
  templateUrl: "./measurement-view.component.html"
})
export class MeasurementViewComponent {
  @Input() entity: MeasurementModel;
}
