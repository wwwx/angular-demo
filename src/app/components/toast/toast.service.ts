import { ToastComponent } from './toast.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { TOAST_MSG, TOAST_REF } from './toast.model';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private overlay: Overlay) {
    }

    show(msg: string): void {
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position().global().centerVertically().centerHorizontally();
        const overlayRef = this.overlay.create(config);
        const inject = Injector.create({
            providers: [
                { provide: TOAST_REF, useValue: overlayRef },
                { provide: TOAST_MSG, useValue: msg },
            ],
        });
        const partal = new ComponentPortal(ToastComponent, null, inject);
        overlayRef.attach(partal);
        setTimeout(() => {
            overlayRef.detach();
            overlayRef.dispose();
        }, 3 * 1e3);
    }
}
