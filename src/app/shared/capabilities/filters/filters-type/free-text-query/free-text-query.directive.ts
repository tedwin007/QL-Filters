import { ComponentFactoryResolver, Directive, Input, Type, ViewContainerRef } from '@angular/core';
import { BaseCapabilityModel } from '../../../models/base-capability.directive';
import { BaseCapability } from '../../../models/base-capability.interface';
import { FreeTextQueryComponent } from './free-text-query.component';

@Directive({
    selector: '[freeTextQuery]'
})
export class FreeTextQueryDirective extends BaseCapabilityModel {
    public component: Type<BaseCapability> = FreeTextQueryComponent;
    public superOnDestroy?: () => void = undefined;

    @Input('freeTextQuery') set capability(vcr: ViewContainerRef) {
        this.attach(vcr);
    }

    constructor(
        compGeneratorService: ComponentFactoryResolver,
        host: ViewContainerRef
    ) {
        super(host, compGeneratorService);
        super.attachContainerFallback(host);
    }
}
