import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginParamsModel } from '../models/login-params.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) {
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('Auth-Token');
    }

    logout(): void {
        localStorage.removeItem('Auth-Token');
        this.router.navigateByUrl('/auth/login');
    }

    login(params: LoginParamsModel): Observable<boolean> {
        localStorage.setItem(
            'Auth-Token',
            'oweo90238409sldfoi23098OIUOlkj23j409'
        );
        return of(true).pipe(delay(300));
    }
}
