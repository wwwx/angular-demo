import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../../shared/loading.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as htmlToImage from 'html-to-image';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [LoggerService]
})
export class DashboardComponent implements OnInit {
    isOpen = false;
    shouldHideDashboard = false;
    imageDataUrl = '';
    loading$ = this.loader.loading$;
    topics = [];

    constructor(private logger: LoggerService,
                private translate: TranslateService,
                public loader: LoadingService,
                private http: HttpClient) {
    }

    ngOnInit(): void {
    }


    toggle(): void {
        // this.logger.add(this.isOpen.toString());
        //
        // const loggers = this.logger.get();
        // console.log(loggers.join(', '));

        // this.translate.get('APP_TITLE').subscribe(value => console.log(value));
        // console.log(this.translate.instant('APP_TITLE'));
    }


    fetchTopics(): void {
        this.http.get<any>('https://cnodejs.org/api/v1/topics').subscribe(response => {
            this.topics = response.data;
        });
    }

    clearTopics(): void {
        this.topics = [];
    }

    async html2Image(): Promise<boolean> {
        this.imageDataUrl = await htmlToImage.toPng(document.getElementById('dashboard') as HTMLDivElement);
        this.shouldHideDashboard = true;
        return true;
    }

}
