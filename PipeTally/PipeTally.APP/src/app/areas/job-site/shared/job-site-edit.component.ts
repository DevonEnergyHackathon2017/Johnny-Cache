import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { JobSiteModel } from "../../../models/job-site-model";
 
@Component({
  selector: "app-job-site-edit",
  templateUrl: "./job-site-edit.component.html"
})
export class JobSiteEditComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      "Title": new FormControl(null, [Validators.required]),
      "Latitude": new FormControl(null, [Validators.required]),
      "Longitude": new FormControl(null, [Validators.required]),
      "TotalWeight": new FormControl(null, [Validators.required]),
      "Grade": new FormControl(null, [Validators.required]),
      "InnerDiameter": new FormControl(null, [Validators.required]),
      "OuterDiameter": new FormControl(null, [Validators.required]),
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
    this.form.get("Grade").setValue(this._entity.Grade);
    this.form.get("InnerDiameter").setValue(this._entity.InnerDiameter);
    this.form.get("OuterDiameter").setValue(this._entity.OuterDiameter);
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
    this._entity.Grade = this.form.get("Grade").value;
    this._entity.InnerDiameter = this.form.get("InnerDiameter").value;
    this._entity.OuterDiameter = this.form.get("OuterDiameter").value;
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
