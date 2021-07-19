import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';
import { HttpClientService } from './http-client.service';



@NgModule({
    declarations: [
        AwesomePipe,
        HighlightDirective,
    ],
    providers: [UserService, HttpClientService],
    imports: [
        CommonModule
    ],
    exports: [AwesomePipe, HighlightDirective]
})
export class SharedModule { }
