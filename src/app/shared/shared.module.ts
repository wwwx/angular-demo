import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';



@NgModule({
    declarations: [
        AwesomePipe,
        HighlightDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [AwesomePipe, HighlightDirective]
})
export class SharedModule { }
