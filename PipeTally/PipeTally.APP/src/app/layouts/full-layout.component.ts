import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";

import { BusyService } from "../services/busy.service";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html"
})
export class FullLayoutComponent implements OnInit {
  constructor(
    public messageSvc: MessageService,
    public busySvc: BusyService
  ) { }

  ngOnInit() {
  }
}