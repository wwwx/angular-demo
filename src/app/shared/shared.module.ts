import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';



@NgModule({
    declarations: [
        AwesomePipe,
        HighlightDirective,
    ],
    providers: [UserService],
    imports: [
        CommonModule
    ],
    exports: [AwesomePipe, HighlightDirective]
})
export class SharedModule { }
