import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export const TOAST_REF = new InjectionToken<OverlayRef>('TOAST_REF');
export const TOAST_MSG = new InjectionToken<string>('TOAST_MSG');
