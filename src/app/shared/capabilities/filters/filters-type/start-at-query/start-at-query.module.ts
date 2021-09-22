import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartAtQueryComponent } from './start-at-query.component';
import { StartAtQueryDirective } from './start-at-query.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StartAtQueryDirective,
        StartAtQueryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        StartAtQueryDirective,
        StartAtQueryComponent,
    ]
})
export class StartAtQueryModule {
}
