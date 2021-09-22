import {
  ComponentFactoryResolver,
  Directive,
  Input,
  Type,
  ViewContainerRef
} from "@angular/core";
import { BaseCapabilityModel } from "../../../models/base-capability.directive";
import { BaseCapability } from "../../../models/base-capability.interface";
import { EndAtQueryComponent } from "./end-at-query.component";

@Directive({ selector: "[endAtQuery]" })
export class EndAtQueryDirective extends BaseCapabilityModel {
  public component: Type<BaseCapability> = EndAtQueryComponent;
  public superOnDestroy?: () => void = undefined;

  @Input("endAtQuery") set capability(vcr: ViewContainerRef) {
    this.attach(vcr);
  }

  constructor(
    compGeneratorService: ComponentFactoryResolver,
    host: ViewContainerRef
  ) {
    super(host, compGeneratorService);
    this.setHostContainer(host);
    this.createCapabilityComponent(host);
  }
}
