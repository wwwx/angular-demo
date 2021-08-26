import { Component, Inject, OnInit } from '@angular/core';
import { TOAST_MSG } from './toast.model';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
    constructor(@Inject(TOAST_MSG) public msg: string) {}

    ngOnInit(): void {
        this.msg += ' $_$';
    }
}
