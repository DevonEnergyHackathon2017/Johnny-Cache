import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MeasurementModel } from "../../../models/measurement-model";
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: "app-measurement-edit",
  templateUrl: "./measurement-edit.component.html"
})
export class MeasurementEditComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      "Joint": new FormControl(null, [Validators.required]),
      "PipeLength": new FormControl(null, [Validators.required]),
      "ThreadLength": new FormControl(null, [Validators.required]),
      "ItemDescription": new FormControl(null, [Validators.required]),
      "TopThread": new FormControl(null, [Validators.required]),
      "IsDamaged": new FormControl(null, [Validators.required]),    
    });
  }
  private _entity: MeasurementModel;

  public LoadForm(): boolean {
    if (!this._entity) { return false; }
    this.form.get("Joint").setValue(this._entity.Joint);
    this.form.get("PipeLength").setValue(this._entity.PipeLength);
    this.form.get("ThreadLength").setValue(this._entity.ThreadLength);
    this.form.get("ItemDescription").setValue(this._entity.ItemDescription);
    this.form.get("TopThread").setValue(this._entity.TopThread);
    this.form.get("IsDamaged").setValue(this._entity.IsDamaged);    
    return true;
  }

  public ReadForm(): boolean {
    if (!this._entity) { return false; }
    if (this.form.invalid) { return false; }

    this._entity.Joint = this.form.get("Joint").value;
    this._entity.PipeLength = this.form.get("PipeLength").value;
    this._entity.ThreadLength = this.form.get("ThreadLength").value;
    this._entity.ItemDescription = this.form.get("ItemDescription").value;
    this._entity.TopThread = this.form.get("TopThread").value;
    this._entity.IsDamaged = this.form.get("IsDamaged").value;
    return true;
  }

  @Input()
  set entity(entity: MeasurementModel) {
    this._entity = entity;
    this.LoadForm();
  }
  get entity(): MeasurementModel {
    this.ReadForm();
    return this._entity;
  }
}
