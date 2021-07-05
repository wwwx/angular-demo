import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../../service/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    isOpen = false;

    constructor(private logger: LoggerService) { }
    ngOnInit(): void {
    }

    toggle(): void {
        this.isOpen = !this.isOpen;
        this.logger.add(this.isOpen.toString());

        const loggers = this.logger.get();
        console.log(loggers.join(', '));
    }

}
