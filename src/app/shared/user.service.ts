import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {
    }

    getName(): string {
        return 'Hello world;';
    }
}
