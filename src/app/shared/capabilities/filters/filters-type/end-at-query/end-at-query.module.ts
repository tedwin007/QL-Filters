import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EndAtQueryComponent } from './end-at-query.component';
import { EndAtQueryDirective } from './end-at-query.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        EndAtQueryDirective,
        EndAtQueryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        EndAtQueryDirective,
        EndAtQueryComponent
    ]
})
export class EndAtQueryModule {
}
