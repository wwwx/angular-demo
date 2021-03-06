import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { AlgorithmComponent } from './components/algorithm/algorithm.component';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'algorithm', component: AlgorithmComponent },
    { path: 'http', component: HttpComponent },
    {
        path: 'auth',
        loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'items',
        canActivate: [AuthGuard],
        loadChildren: () => import('./module/items/items.module').then((m) => m.ItemsModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule {
}
