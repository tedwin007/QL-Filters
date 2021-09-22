import { EventEmitter } from '@angular/core';

export interface BaseCapability<T = any> {
    capabilityName: string;
    onDone: EventEmitter<string>;
    onValueChange?: EventEmitter<T>;
}
