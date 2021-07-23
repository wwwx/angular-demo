import { AfterViewInit, ContentChild, Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { DraggableHandleDirective } from './draggable-handle.directive';

@Directive({
    selector: '[appDraggable]'
})
export class DraggableDirective implements OnDestroy, AfterViewInit {
    private element!: HTMLElement;
    private subscribtions: Subscription[] = [];
    @ContentChild(DraggableHandleDirective) handle!: DraggableHandleDirective;
    handleElement!: HTMLElement;
    private readonly DEFAULT_DRAGGABLE_BOUNDARY_QUERY = 'body';
    @Input() boundaryQuery = this.DEFAULT_DRAGGABLE_BOUNDARY_QUERY;
    draggableBoundaryElement!: HTMLElement | HTMLBodyElement;

    constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) {
    }

    ngAfterViewInit(): void {
        this.draggableBoundaryElement = this.document.querySelector(this.boundaryQuery) as HTMLElement;
        if (this.draggableBoundaryElement) {

            this.element = this.el.nativeElement as HTMLElement;
            this.handleElement = this.handle?.el?.nativeElement || this.element;
            // console.log(this.handleElement);
            setTimeout(() => this.initDrag(), 0);
        } else {
            throw new Error('Coundn\'t find any element with query: ' + this.boundaryQuery);
        }
    }

    ngOnDestroy(): void {
        this.subscribtions.forEach(subscribtion => subscribtion?.unsubscribe());
    }

    changeElementClassName(originName: string, replaceName: string): void {
        if (this.element.classList.contains(originName)) {
            this.element.className = this.element.className.replace(originName, replaceName);
        } else {
            this.element.classList.add(replaceName);
        }
    }

    initDrag(): void {
        const minBoundX = this.draggableBoundaryElement.offsetLeft - this.element.offsetLeft;
        const minBoundY = this.draggableBoundaryElement.offsetTop - this.element.offsetTop;
        const maxBoundX = minBoundX + this.draggableBoundaryElement.offsetWidth - this.element.offsetWidth;
        const maxBoundY = minBoundY + this.draggableBoundaryElement.offsetHeight - this.element.offsetHeight;
        // console.log(this.draggableBoundaryElement.offsetWidth, this.draggableBoundaryElement.offsetHeight);
        // console.log(this.element.offsetLeft, this.element.offsetTop);
        // console.log(minBoundX, minBoundY, maxBoundX, maxBoundY);


        const dragStart$ = fromEvent<MouseEvent>(this.handleElement, 'mousedown');
        const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup');
        const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(takeUntil(dragEnd$));

        let initialX: number;
        let initialY: number;
        let currentX = 0;
        let currentY = 0;
        let dragSub!: Subscription;

        const dragStartSub = dragStart$.subscribe((event) => {
            this.changeElementClassName('shadow-sm', 'shadow-md');
            initialX = event.clientX - currentX;
            initialY = event.clientY - currentY;


            dragSub = drag$.subscribe((ev) => {
                event.preventDefault();
                const x = ev.clientX - initialX;
                const y = ev.clientY - initialY;

                currentX = Math.max(minBoundX, Math.min(maxBoundX, x));
                currentY = Math.max(minBoundY, Math.min(maxBoundY, y));
                this.element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            });
        });

        const dragEndSub = dragEnd$.subscribe(() => {
            this.changeElementClassName('shadow-md', 'shadow-sm');
            initialX = currentX;
            initialY = currentY;
            if (dragSub) {
                dragSub.unsubscribe();
            }
        });

        this.subscribtions.push(dragStartSub, dragSub, dragEndSub);

    }


}
