import { Component, OnInit } from '@angular/core';
import { Queue } from '../utils/queue';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
    queue = new Queue();

    get randomNum(): string {
        return Math.random().toString().substr(2, 1);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
