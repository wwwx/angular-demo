import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-items-detail',
  template: '<h3 appHighlight>items detail</h3><div>item id: {{ id }}</div><a href="javascript:history.back();">go back</a>',
})
export class ItemsDetailComponent implements OnInit{
    id = 0

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        // tslint:disable-next-line:no-non-null-assertion
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    }


}
