import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full-layout.component";

import { JobSiteListComponent } from "./areas/job-site/job-site-list.component";
import { JobSiteCreateComponent } from "./areas/job-site/job-site-create.component";
import { JobSiteReadComponent } from "./areas/job-site/job-site-read.component";
import { JobSiteUpdateComponent } from "./areas/job-site/job-site-update.component";
import { JobSiteDeleteComponent } from "./areas/job-site/job-site-delete.component";
import { MeasurementCreateComponent } from "./areas/measurements/measurement-create.component";
import { MeasurementReadComponent } from "./areas/measurements/measurement-read.component";
import { MeasurementUpdateComponent } from "./areas/measurements/measurement-update.component";
import { MeasurementListComponent } from "./areas/measurements/measurement-list.component";
import { MeasurementDeleteComponent } from "./areas/measurements/measurement-delete.component";

export const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "pipe tally" },
    children: [
      { path: '', component: JobSiteListComponent },
      { path: 'job-site-create', component: JobSiteCreateComponent },
      { path: 'job-site-read/:id', component: JobSiteReadComponent },
      { path: 'job-site-update/:id', component: JobSiteUpdateComponent },
      { path: 'job-site-delete/:id', component: JobSiteDeleteComponent },
      { path: 'job-site-list', component: JobSiteListComponent },

      { path: 'measurement-create/:id', component: MeasurementCreateComponent },
      { path: 'measurement-read/:id', component: MeasurementReadComponent },
      { path: 'measurement-update/:id', component: MeasurementUpdateComponent },
      { path: 'measurement-delete/:id', component: MeasurementDeleteComponent },
      { path: 'measurement-list/:id', component: MeasurementListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
