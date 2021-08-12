import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger.service';
import { HttpClientService } from '../../shared/http-client.service';
import { fromEvent, interval, Observable, of, timer, merge, empty, zip, Subject, BehaviorSubject } from 'rxjs';
import {
    concat, concatAll,
    concatMap,
    concatMapTo, debounceTime, distinctUntilChanged,
    finalize, map,
    mapTo, mergeAll, mergeMap, pluck,
    scan,
    startWith,
    switchMap,
    take,
    takeUntil,
    takeWhile,
    tap
} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    isOpen = false;
    draggableDialogVisible = false;
    COUNT = 5;
    toggler = new BehaviorSubject<boolean>(false);
    toggler$ = this.toggler.asObservable();
    searchText$ = new Subject<string>();

    constructor(private logger: LoggerService, private http: HttpClientService) {
    }

    ngOnInit(): void {

        // const clicks = fromEvent(document, 'click');
        // const result = clicks.pipe(
        //     concatMap(ev => interval(1000).pipe(take(4)))
        // );
        // result.subscribe(x => console.log(x));


        // ===================
        // const resume = document.getElementById('resume') as HTMLDivElement;
        // const pause = document.getElementById('pause') as HTMLDivElement;
        // const interval$ = interval(1000).pipe(mapTo(-1));
        // const resume$ = fromEvent(resume, 'click').pipe(mapTo(true));
        // const pause$ = fromEvent(pause, 'click').pipe(mapTo(false));
        // const timer$ = merge(resume$, pause$).pipe(
        //     startWith(true),
        //     switchMap(val => val ? interval$ : empty()),
        //     scan((acc, cur) => cur ? acc + cur : acc, 10),
        //     takeWhile(v => v >= 0)
        // );
        // timer$.subscribe(console.log);

        // =====================

        // timer(0, 1000)
        //     .subscribe(console.log);

        // const source = of(1, 2, 3);
        // timer(3000).pipe(
        //     concatMapTo(source)
        // ).subscribe(console.log);


        // =====================
        // this.testInput();
        this.toggler$.subscribe(console.log);
        this.searchText$.asObservable().pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe(console.log);

    }


    testSubject(): void {
        this.isOpen = !this.isOpen;
        this.toggler.next(this.isOpen);
    }


    toggle(): void {
        this.isOpen = !this.isOpen;
        this.logger.add(this.isOpen.toString());

        const loggers = this.logger.get();
        console.log(loggers.join(', '));
    }

    toggleDraggleDialog(): void {
        this.draggableDialogVisible = !this.draggableDialogVisible;
    }


    testHttp(): void {
        this.http.get('/api/topics', { current: 1, size: 10 });
    }

    test(): void {
        this.logger.log('Hello world;');
    }

    testInterval(): void {
        const btn = document.getElementById('btn') as HTMLDivElement;
        const click$ = fromEvent(btn, 'click');
        // const source = interval(300).pipe(tap(console.log), takeWhile(x => x < 4));
        const source = interval(1000).pipe(tap(console.log), takeUntil(click$), finalize(() => {
            console.log('complete!');
        }));
        source.subscribe(value => {
            console.log('output: ', value);
        }, error => {
        });
    }


    countDown(): void {
        this.COUNT--;
        interval(1000).pipe(
            tap(() => this.COUNT--),
            tap(() => console.log(this.COUNT)),
            takeWhile(() => this.COUNT > 0)
        ).subscribe();


    }

    testConcat(): void {
        // const source1 = of(1, 2, 3);
        // const source2 = of(4, 5, 6);
        // const result = source1.pipe(concat(source2));
        // result.subscribe(console.log);
    }

    testCreate(): void {
        // const hello = Observable.create((observer: any) => {
        //     observer.next('Hello');
        //     observer.next('World;');
        // });
        //
        // hello.subscribe(console.log);
    }

    testMerge(): void {
        const myPromise = (value: any) => {
            return new Promise(resolve => setTimeout(() => resolve('Result: ' + value), 2000));
        };

        // myPromise('hwllo world;').then(console.log);

        const source = of(1, 2, 3);
        source.pipe(
            mergeMap(myPromise),
        ).subscribe(console.log);
    }

    testZip(): void {
        const source1$ = interval(1000).pipe(mapTo('A'));
        const source2$ = interval(1500).pipe(mapTo('B'));
        zip(source1$, source2$).pipe(take(4)).subscribe(value => {
            console.log(value, new Date().getMilliseconds());
        });
    }

    testInput(): void {
        const inputEl = document.getElementById('username') as HTMLInputElement;
        const input$ = fromEvent(inputEl, 'keyup').pipe(debounceTime(500), pluck('target', 'value'));
        input$.subscribe(console.log);

    }

    search(event: KeyboardEvent): void {
        // console.log(event);
        const value = (event.target as HTMLInputElement).value;
        this.searchText$.next(value);

    }

}
