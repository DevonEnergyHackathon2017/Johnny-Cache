import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full-layout.component";
import { ApplicationsComponent } from "./areas/applications/applications.component";
import { HomeListComponent } from "./areas/home/home-list.component"
import { MeasurementListComponent } from "./areas/measurements/measurements.component"
import { HomeCreateComponent } from "./areas/home/home-create.component";
import { HomeReadComponent } from "./areas/home/home-read.component";
import { HomeUpdateComponent } from "./areas/home/home-update.component";
import { HomeDeleteComponent } from "./areas/home/home-delete.component";

export const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "Home" },
    children: [
      { path: "", component: HomeListComponent },
      { path: 'home-list', component: HomeListComponent },
      { path: 'home-create', component: HomeCreateComponent },
      { path: 'home-read/:id', component: HomeReadComponent },
      { path: 'home-update/:id', component: HomeUpdateComponent },
      { path: 'home-delete/:id', component: HomeDeleteComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
