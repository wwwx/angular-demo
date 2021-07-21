import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-algorithm',
    templateUrl: './algorithm.component.html',
    styleUrls: ['./algorithm.component.css'],

})
export class AlgorithmComponent implements OnInit {
    @HostBinding('class') className = 'flex';

    constructor() {
    }

    ngOnInit(): void {
    }

}
