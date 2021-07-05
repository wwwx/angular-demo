import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    list: string[] = [];
    constructor() {}

    log(message: string): void {
        console.log(message);
    }

    add(message: string): void {
        this.list.push(message);
    }

    get(): string[] {
        return this.list;
    }
}
