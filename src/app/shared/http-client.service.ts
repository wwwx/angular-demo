import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import isObjectLike from 'lodash-es/isObject';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private http: HttpClient) {
    }

    get<T = any>(url: string, data?: object): Observable<T | null> {
        let params = new HttpParams();
        if (data && isObjectLike(data)) {
            Object.keys(data).forEach(key => {
                // @ts-ignore
                params = params.append(key, data[key]);
            });
        }
        // console.log(params);

        return this.http.get<T>(url, { params });
    }
}
