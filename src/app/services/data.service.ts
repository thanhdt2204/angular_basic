import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    saveSuccessSource = new BehaviorSubject<boolean>(false);
    isSaveSuccess = this.saveSuccessSource.asObservable();

    constructor() { }

    saveSuccess(status: boolean) {
        this.saveSuccessSource.next(status);
    }

}
