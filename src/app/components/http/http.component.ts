import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingService } from '../../shared/loading.service';
import { catchError, delay, retry, tap, timeout } from 'rxjs/operators';
import { empty } from 'rxjs/internal/Observer';
import { Observable, of, throwError } from 'rxjs';

interface Topic {
    id: number;
    title: string;
}

interface TopicResponse {
    success: boolean;
    data: Topic[];
}

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
    loading$ = this.loader.loading$;
    content = '';

    constructor(private http: HttpClient, public  loader: LoadingService) {
    }

    ngOnInit(): void {
    }

    getList(): void {
        // this.fetchTopics();
        this.fetchMenu().subscribe(console.log);
    }

    fetchMenu(): Observable<boolean> {
        const options = {
            params: new HttpParams().set('title', 'cat')
        }
        return this.http.get<boolean>('http://192.168.31.131:8080/faq/info')
            .pipe(
                // retry(3),
                catchError(error => {
                    console.log(error);
                    return throwError('error');
                })
            );
    }

    fetchTopics(): void {
        this.http.get('https://cnodejs.org/api/v1/topics', { observe: 'body' }).subscribe(response => {
            console.log(response);
            // const keys = response.headers.keys();
            // console.log(keys.map(key => `${key}: ${response.headers.get(key)}`));

        });
    }

}
