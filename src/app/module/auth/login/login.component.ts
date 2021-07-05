import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit(): void {}

    submit(): void {
        this.authService.login();
        this.router.navigateByUrl('/home');
    }
}
