import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Message } from "primeng/primeng";

@Injectable()
export class MessageService {
    public msgs: Message[] = [];

    public AddSuccess(summary: string, detail: string) {
        if (!this.msgs) { this.msgs = []; }
        this.msgs.push({ severity: "success", summary: summary, detail: detail });
    }

    public AddInfo(summary: string, detail: string) {
        if (!this.msgs) { this.msgs = []; }
        this.msgs.push({ severity: "info", summary: summary, detail: detail });
    }

    public AddWarning(summary: string, detail: string) {
        if (!this.msgs) { this.msgs = []; }
        this.msgs.push({ severity: "warn", summary: summary, detail: detail });
    }

    public AddError(summary: string, detail: any) {
        if (!this.msgs) { this.msgs = []; }
        var detailType = typeof detail;
        switch (detailType) {
            case "object":
                if (detail.name) {
                    if (detail.name === "HttpErrorResponse") {
                        var response = detail as HttpErrorResponse;
                        var message = "HTTP Error";
                        if (response.error) {
                            if (response.error.error) {
                                if (response.error.error.message) {
                                    message = response.error.error.message;
                                }
                                if (response.error.error.innererror) {
                                    message += `<br />${response.error.error.innererror.message}`;
                                }
                            }
                        } else if (response.message) {
                            message = response.message;
                        } else if (response.statusText) {
                            message = response.statusText;
                        }

                        this.msgs.push({ severity: "error", summary: summary, detail: message });
                    }
                }
                break;
            case "string":
                this.msgs.push({ severity: "error", summary: summary, detail: detail });
                break;
            default:
                this.msgs.push({ severity: "error", summary: summary, detail: "No error details." });
                break;
        }
    }
}
