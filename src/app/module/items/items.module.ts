import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsDetailComponent } from './items-detail.component';
import { ItemsService } from './items.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        ItemsComponent,
        ItemsDetailComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        SharedModule,
    ],
    providers: [ItemsService]
})
export class ItemsModule {
}
