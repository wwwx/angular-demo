import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';
import { HttpClientService } from './http-client.service';
import { DraggableDirective } from './draggable.directive';
import { DraggableHandleDirective } from './draggable-handle.directive';



@NgModule({
    declarations: [
        AwesomePipe,
        HighlightDirective,
        DraggableDirective,
        DraggableHandleDirective,
    ],
    providers: [UserService, HttpClientService],
    imports: [
        CommonModule
    ],
    exports: [AwesomePipe, HighlightDirective, DraggableDirective, DraggableHandleDirective]
})
export class SharedModule { }
