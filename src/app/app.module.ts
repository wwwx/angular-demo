import { Inject, LOCALE_ID, NgModule, InjectionToken } from '@angular/core';
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
import { StackComponent } from './components/algorithm/stack/stack.component';
import { QueueComponent } from './components/algorithm/queue/queue.component';
import { TreeMenuComponent } from './components/algorithm/tree-menu/tree-menu.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { HtmlToIamgeComponent } from './components/html-to-iamge/html-to-iamge.component';
import { DraggableDialogComponent } from './components/draggable-dialog/draggable-dialog.component';
import { SharedModule } from './shared/shared.module';
import { RangeComponent } from './components/range/range.component';
import { HttpComponent } from './components/http/http.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ToastComponent } from './components/toast/toast.component';
import { APP_CONFIG, HERO_DI_CONFIG } from './models/app-config.model';


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
        StackComponent,
        QueueComponent,
        TreeMenuComponent,
        HtmlToIamgeComponent,
        DraggableDialogComponent,
        RangeComponent,
        HttpComponent,
        ToastComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        HighlightModule,
        OverlayModule,
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
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        LoggerService,
        LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'en' },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                // fullLibraryLoader: () => import('highlight.js'),
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private translate: TranslateService, @Inject(LOCALE_ID) locale: string) {
        translate.use(locale);
    }
}
