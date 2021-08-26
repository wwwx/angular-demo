import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.css']
})
export class RangeComponent implements AfterViewInit {
    rangeValue = '3';
    @ViewChild('tempture') range!: ElementRef<HTMLInputElement>;

    constructor(private rd: Renderer2) {
    }

    ngAfterViewInit(): void {
    }

    valueChanged(value: string): void {
    }


}
