import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-draggable-dialog',
    templateUrl: './draggable-dialog.component.html',
    styleUrls: ['./draggable-dialog.component.css']
})
export class DraggableDialogComponent {
    @Input() visible!: boolean;
    @Output() closeEvent = new EventEmitter();

    onClose(ev: MouseEvent): void {
        ev.stopPropagation();
        this.closeEvent.emit();
    }
}

