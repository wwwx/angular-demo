import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../../service/logger.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [LoggerService]
})
export class DashboardComponent implements OnInit {
    isOpen = false;
    constructor(private logger: LoggerService) { }

    ngOnInit(): void {
    }


    toggle(): void {
        this.logger.add(this.isOpen.toString());

        const loggers = this.logger.get();
        console.log(loggers.join(', '));
    }

}
