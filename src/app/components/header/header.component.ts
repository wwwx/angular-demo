import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
        // console.log(this.el.nativeElement.que);
    }

}
