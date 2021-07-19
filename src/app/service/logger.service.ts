import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class LoggerService {
    list: string[] = [];

    constructor() {
    }

    log(message: string): void {
        console.log(message, moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }

    add(message: string): void {
        this.list.push(message);
    }

    get(): string[] {
        return this.list;
    }
}
