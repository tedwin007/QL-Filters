import { APP_BASE_HREF, CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';

import { EndAtQueryModule } from './filters-type/end-at-query/end-at-query.module';
import { FreeTextQueryModule } from './filters-type/free-text-query/free-text-query.module';
import { StartAtQueryModule } from './filters-type/start-at-query/start-at-query.module';
import { FilterQueryMangerService } from './services/filter-query-manger.service';
import { BetweenComponent } from '../../../form-example/between.component';

const LocationProvider = [
    {provide: APP_BASE_HREF, useValue: ''},
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
];

/**
 * All the filters Modules
 * BetweenComponent is exceptional -  was created only for the sake of demonstration
 */
@NgModule({
    declarations: [BetweenComponent],
    providers: [LocationProvider, FilterQueryMangerService],
    imports: [
        CommonModule,
        StartAtQueryModule,
        FreeTextQueryModule,
        EndAtQueryModule
    ],
    exports: [
        StartAtQueryModule,
        FreeTextQueryModule,
        EndAtQueryModule,
        BetweenComponent
    ]
})
export class FiltersModule {
}
