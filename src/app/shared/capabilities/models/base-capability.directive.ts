import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Output,
    Type,
    ViewContainerRef
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { BaseCapability } from './base-capability.interface';

@Directive()
export abstract class BaseCapabilityModel implements BaseCapability {
    abstract superOnDestroy?: () => void | undefined;
    public capabilityName: string = 'BaseCapability';
    @Output() onDone = new EventEmitter<any>();
    @Output() onValueChange = new EventEmitter<any>();

    /**
     * Attach
     * Triggered only if ViewContainerRef was provided
     * @example ```
     * [endAtQuery]="AnyVCR"
     * ```
     * @param attachTo
     * @see attachContainerFallback
     */
    attach(attachTo?: ViewContainerRef) {
        if (attachTo) {
            this.hostContainer?.clear();
            this.setHostContainer(attachTo);
            this.createCapabilityComponent(attachTo);
        }
    }

    private capabilityAction$ = new Subject();
    protected abstract component: Type<BaseCapability>;
    protected ngUnsubscribe = new Subject();

    get capabilityAction(): Observable<any> {
        return this.capabilityAction$.asObservable();
    }

    protected constructor(public hostContainer: ViewContainerRef,
                          protected compGenerator: ComponentFactoryResolver) {

    }

    createComponent(comp: Type<BaseCapability>, viewComponentRef: ViewContainerRef, onDone: EventEmitter<any>, onValueChange?: EventEmitter<any>) {
        const generated = this.compGenerator.resolveComponentFactory(comp);
        const result: ComponentRef<BaseCapability> = viewComponentRef.createComponent(generated);
        result.instance.onDone = onDone;
        result.instance.onValueChange = onValueChange;
    }

    /**
     * use this in the extending class to attach filter's components to the parent (by default)
     * @example ```
     * constructor(host,compGenerator){
     *     super();
     *     super.attachContainerFallback(host);
     * }
     * ```
     * @param host
     */
    protected attachContainerFallback(host: ViewContainerRef) {
        this.setHostContainer(host);
        this.createCapabilityComponent(host);
    }

    protected createCapabilityComponent(attachTo: ViewContainerRef): void {
        if (attachTo) {
            this.createComponent(
                this.component,
                attachTo,
                this.onDone,
                this.onValueChange
            );
        }
    }

    protected setHostContainer(attachTo: ViewContainerRef) {
        this.hostContainer = attachTo;
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.superOnDestroy?.();
    }
}

