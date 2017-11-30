import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule, DataTableModule, GrowlModule, InputTextareaModule, InputTextModule, MenubarModule, MenuModule, MessagesModule, PanelMenuModule, PanelModule, SharedModule, SpinnerModule, TieredMenuModule } from "primeng/primeng";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatGridListModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatTabsModule, MatToolbarModule, MatSidenavModule } from "@angular/material";


import { AppRoutingModule } from "./app.routing";

import { BusyService } from "./services/busy.service";
import { MessageService } from "./services/message.service";

import { PipeTallyODataConfiguration } from "./services/pipetally-odata-configuration";
import { JobSiteService } from "./services/job-site.service";
import { MeasurementService } from "./services/measurement.service";

import { AppComponent } from "./app.component";
import { FullLayoutComponent } from "./layouts/full-layout.component";
import { ApplicationsComponent } from "./areas/applications/applications.component";
import { HomeComponent } from "./areas/home/home.component";
import { HomeMeasurementComponent } from "./areas/home/home-measurements.component";

@NgModule({
  declarations: [
    AppComponent, FullLayoutComponent, ApplicationsComponent, HomeComponent, HomeMeasurementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,

    ButtonModule, DataTableModule, GrowlModule, InputTextareaModule, InputTextModule, MenubarModule, MenuModule, MessagesModule, PanelMenuModule, PanelModule, SharedModule, SpinnerModule, TieredMenuModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatGridListModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatTabsModule, MatToolbarModule, MatSidenavModule
  ],
  providers: [

    BusyService, MessageService,

    PipeTallyODataConfiguration,
    JobSiteService, MeasurementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
