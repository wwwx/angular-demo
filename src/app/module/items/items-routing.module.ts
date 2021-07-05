import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './items.component';
import {ItemsDetailComponent} from './items-detail.component';

const routes: Routes = [
    {path: '', component: ItemsComponent},
    {path: ':id', component: ItemsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
