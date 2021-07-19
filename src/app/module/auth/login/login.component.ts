import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatePassword } from './validate-password';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = this.fb.group({
        email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
        password: [null, [Validators.required, Validators.minLength(6), ValidatePassword]]
    });

    submitted = false;

    constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        // this.loginForm.patchValue({
        //     email: '7878@qq.com'
        // });
    }

    submit(): void {
        this.submitted = true;
        if (!this.loginForm.valid) {
            return;
        }
        this.authService.login(this.loginForm.value).subscribe((value) => {
            if (value) {
                this.router.navigateByUrl('/home');
            }
        });
    }
}
