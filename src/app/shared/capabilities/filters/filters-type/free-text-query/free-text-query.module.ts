import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FreeTextQueryComponent } from './free-text-query.component';
import { FreeTextQueryDirective } from './free-text-query.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FreeTextQueryComponent,
        FreeTextQueryDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FreeTextQueryComponent,
        FreeTextQueryDirective
    ]
})
export class FreeTextQueryModule {
}
