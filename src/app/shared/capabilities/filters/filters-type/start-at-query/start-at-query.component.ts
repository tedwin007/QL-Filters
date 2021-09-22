import { Component } from '@angular/core';

import { BaseCapability } from '../../../models/base-capability.interface';
import { EmittedFilter, StartAt } from '../../models/filter-types';
import { FilterQueryMangerService } from '../../services/filter-query-manger.service';
import { BaseFilterModel } from '../base-filter-model/base-filter-model';

type StartAtFilter = EmittedFilter<StartAt>;

@Component({
    selector: 'lib-start-at-query',
    templateUrl: './start-at-query.component.html'
})
export class StartAtQueryComponent extends BaseFilterModel implements BaseCapability<StartAtFilter> {
    isUniqueValue = true;
    filterValue = '';

    constructor(filterQueryManger: FilterQueryMangerService) {
        super(filterQueryManger, 'startAt');
    }
}
