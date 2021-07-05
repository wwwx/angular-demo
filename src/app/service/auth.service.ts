import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) {}

    isLoggedIn(): boolean {
        return !!localStorage.getItem('Auth-Token');
    }

    logout(): void {
        localStorage.removeItem('Auth-Token');
        this.router.navigateByUrl('/auth/login');
    }

    login(): void {
        localStorage.setItem(
            'Auth-Token',
            'oweo90238409sldfoi23098OIUOlkj23j409'
        );
    }
}
