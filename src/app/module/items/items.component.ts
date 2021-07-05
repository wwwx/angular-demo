import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Item, ItemsService} from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {
    title = 'Items'
    items: Observable<Item[]>

    constructor(private itemService: ItemsService) {
        this.items = itemService.getItems();
    }

}
