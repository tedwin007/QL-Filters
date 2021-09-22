import {
  ComponentFactoryResolver,
  Directive,
  Input,
  Type,
  ViewContainerRef
} from "@angular/core";
import { BaseCapabilityModel } from "../../../models/base-capability.directive";
import { BaseCapability } from "../../../models/base-capability.interface";
import { StartAtQueryComponent } from "./start-at-query.component";

@Directive({
  selector: "[startAtQuery]"
})
export class StartAtQueryDirective extends BaseCapabilityModel {
  public component: Type<BaseCapability> = StartAtQueryComponent;
  public superOnDestroy?: () => void = undefined;

  @Input("startAtQuery") set capability(vcr: ViewContainerRef) {
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
