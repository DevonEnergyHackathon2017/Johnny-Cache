import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full-layout.component";
import { ApplicationsComponent } from "./areas/applications/applications.component";
import { HomeComponent } from "./areas/home/home.component"
import { HomeMeasurementComponent } from "./areas/home/home-measurements.component"

export const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "Home" },
    children: [
      { path: "", component: HomeComponent },
    ]
  },
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "Home Measurement" },
    children: [
      { path: "home-measurement", component: HomeMeasurementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
