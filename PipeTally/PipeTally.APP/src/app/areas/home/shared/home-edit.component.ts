import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { JobSiteModel } from "../../../models/job-site-model";

@Component({
  selector: "app-home-edit",
  templateUrl: "./home-edit.component.html"
})
export class HomeEditComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      "Title": new FormControl(null, [Validators.required]),
      "Latitude": new FormControl(null, [Validators.required]),
      "Longitude": new FormControl(null, [Validators.required]),
      "TotalWeight": new FormControl(null, [Validators.required]),
      "PipeDiameter": new FormControl(null, [Validators.required]),
      "ThreadType": new FormControl(null, [Validators.required]),      
    });
  }
  private _entity: JobSiteModel;

  public LoadForm(): boolean {
    if (!this._entity) { return false; }
    this.form.get("Title").setValue(this._entity.Title);
    this.form.get("Latitude").setValue(this._entity.Latitude);
    this.form.get("Longitude").setValue(this._entity.Longitude);
    this.form.get("TotalWeight").setValue(this._entity.TotalWeight);
    this.form.get("PipeDiameter").setValue(this._entity.PipeDiameter);
    this.form.get("ThreadType").setValue(this._entity.ThreadType);
    
    return true;
  }

  public ReadForm(): boolean {
    if (!this._entity) { return false; }
    if (this.form.invalid) { return false; }

    this._entity.Title = this.form.get("Title").value;
    this._entity.Latitude = this.form.get("Latitude").value;
    this._entity.Longitude = this.form.get("Longitude").value;
    this._entity.TotalWeight = this.form.get("TotalWeight").value;
    this._entity.PipeDiameter = this.form.get("PipeDiameter").value;
    this._entity.ThreadType = this.form.get("ThreadType").value;

    return true;
  }

  @Input()
  set entity(entity: JobSiteModel) {
    this._entity = entity;
    this.LoadForm();
  }
  get entity(): JobSiteModel {
    this.ReadForm();
    return this._entity;
  }
}
