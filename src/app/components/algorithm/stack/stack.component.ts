import { Component, OnInit } from '@angular/core';
import { Stack } from '../utils/stack';

@Component({
    selector: 'app-stack',
    templateUrl: './stack.component.html',
    styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
    stack = new Stack();

    get randomNum(): string {
        return Math.random().toString().substr(2, 1);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
