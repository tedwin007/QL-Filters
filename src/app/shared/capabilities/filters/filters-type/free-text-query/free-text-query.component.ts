import { Component } from '@angular/core';

import { EmittedFilter, SearchTerm } from '../../models/filter-types';
import { FilterQueryMangerService } from '../../services/filter-query-manger.service';
import { BaseFilterModel } from '../base-filter-model/base-filter-model';
import { BaseCapability } from '../../../models/base-capability.interface';

@Component({
    selector: 'lib-free-text-query',
    templateUrl: './free-text-query.component.html',
})
export class FreeTextQueryComponent extends BaseFilterModel implements BaseCapability<EmittedFilter<SearchTerm>> {
    public filterValue: string;
    public isUniqueValue = true;

    constructor(filterQueryManger: FilterQueryMangerService) {
        super(filterQueryManger, 'name');
    }
}
