import { AfterViewInit, Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
    // tslint:disable-next-line:component-selector
    selector: '[app-block-item]',
    templateUrl: './block-item.component.html',
    // template: '<canvas id="chart" style="width: 300px; height: 200px;"></canvas>',
    styleUrls: ['./block-item.component.css']
})
export class BlockItemComponent implements AfterViewInit {
    @HostBinding('style') private readonly style = 'margin-left: auto;';

    // @HostBinding('class') private readonly className = 'chart-container';


    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        const myChart = new Chart(this.el.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}
