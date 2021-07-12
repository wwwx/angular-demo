import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
    private loading = new BehaviorSubject<boolean>(false);
    public readonly loading$ = this.loading.asObservable();

    constructor() {
    }

    show(): void {
        this.loading.next(true);
    }

    hide(): void {
        this.loading.next(false);
    }
}
