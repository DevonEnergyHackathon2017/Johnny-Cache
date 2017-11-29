import { Injectable } from '@angular/core';

@Injectable()
export class BusyService {
    private _busyCount: number = 0;

    public IsBusy(): boolean {
        return this._busyCount > 0;
    }

    public SetBusy(): void {
        this._busyCount += 1;
    }

    public SetFree(): void {
        if (this._busyCount > 0) { this._busyCount -= 1; }
    }
}