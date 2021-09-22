import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiltersModule } from './filters/filters.module';

/**
 * CapabilitiesModule
 * contain all 'features' implemented upon {{@link BaseCapabilityModel}}
 */
@NgModule({
  imports: [
    CommonModule,
    FiltersModule
  ],
  exports: [
    CommonModule,
    FiltersModule
  ]
})
export class CapabilitiesModule { }
