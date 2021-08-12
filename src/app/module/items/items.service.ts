import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Item {
    constructor(public id: number, public title: string) {
    }
}

const ITEMS: Item[] = [
    new Item(1, 'Sticky notes'),
    new Item(2, 'Dry erase markers'),
    new Item(3, 'Erasers'),
    new Item(4, 'Whiteboard cleaners')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ItemsService {

    constructor() {
    }

    getItems(): Observable<Item[]> {
        return of(ITEMS).pipe(delay(FETCH_LATENCY));
    }

    getItem(id: number): Observable<Item> {
        // tslint:disable-next-line:no-non-null-assertion
        const item$ = of(ITEMS.find(item => item.id === id)!);
        return item$.pipe(delay(FETCH_LATENCY));
    }
}
