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
import { JobSiteService } from "./services/job-site.service";
import { MeasurementService } from "./services/measurement.service";

import { PipeTallyODataConfiguration } from "./services/pipe-tally-odata-configuration";

import { AppComponent } from "./app.component";
import { FullLayoutComponent } from "./layouts/full-layout.component";

import { JobSiteViewComponent } from "./areas/job-site/shared/job-site-view.component";
import { JobSiteEditComponent } from "./areas/job-site/shared/job-site-edit.component";
import { JobSiteListComponent } from "./areas/job-site/job-site-list.component";
import { JobSiteCreateComponent } from "./areas/job-site/job-site-create.component";
import { JobSiteReadComponent } from "./areas/job-site/job-site-read.component";
import { JobSiteUpdateComponent } from "./areas/job-site/job-site-update.component";
import { JobSiteDeleteComponent } from "./areas/job-site/job-site-delete.component";
import { MeasurementCreateComponent } from "./areas/measurements/measurement-create.component";
import { MeasurementDeleteComponent } from "./areas/measurements/measurement-delete.component";
import { MeasurementEditComponent } from "./areas/measurements/shared/measurement-edit.component";
import { MeasurementListComponent } from "./areas/measurements/measurement-list.component";
import { MeasurementReadComponent } from "./areas/measurements/measurement-read.component";
import { MeasurementUpdateComponent } from "./areas/measurements/measurement-update.component";
import { MeasurementViewComponent } from "./areas/measurements/shared/measurement-view.component";


@NgModule({
  declarations: [
    AppComponent, FullLayoutComponent,
    JobSiteViewComponent, JobSiteEditComponent, JobSiteListComponent, JobSiteCreateComponent, JobSiteReadComponent, JobSiteUpdateComponent, JobSiteDeleteComponent, 
    MeasurementCreateComponent,MeasurementDeleteComponent,MeasurementEditComponent,MeasurementListComponent, MeasurementReadComponent,MeasurementUpdateComponent,
    MeasurementViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,

    ButtonModule, DataTableModule, GrowlModule, InputTextareaModule, InputTextModule, MenubarModule, MenuModule, MessagesModule, PanelMenuModule, PanelModule, SharedModule, SpinnerModule, TieredMenuModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatGridListModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatTabsModule, MatToolbarModule, MatSidenavModule,
    
  ],
  providers: [
    BusyService, MessageService,

    PipeTallyODataConfiguration,
    JobSiteService, MeasurementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
