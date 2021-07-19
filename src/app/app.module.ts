import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { PopupComponent } from './components/popup/popup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoggerService } from './service/logger.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BlockItemComponent } from './components/block-item/block-item.component';
import { LoadingService } from './shared/loading.service';
import { NetworkInterceptor } from './service/network.interceptor';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { EmojiComponent } from './components/emoji/emoji.component';
import { AlgorithmComponent } from './components/algorithm/algorithm.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        PopupComponent,
        HomeComponent,
        DashboardComponent,
        HeaderComponent,
        BlockItemComponent,
        LanguageSelectComponent,
        EmojiComponent,
        AlgorithmComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        LoggerService, LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'en' }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private translate: TranslateService, @Inject(LOCALE_ID) locale: string) {
        translate.use(locale);
    }
}
