import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private title: Title, private el: ElementRef) {}

    ngOnInit(): void {
        // Set title
        console.log(this.title.getTitle());
    }
}
