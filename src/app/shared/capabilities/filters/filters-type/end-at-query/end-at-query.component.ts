import { Component } from '@angular/core';
import { BaseCapability } from '../../../models/base-capability.interface';
import { EmittedFilter, EndAt } from '../../models/filter-types';
import { FilterQueryMangerService } from '../../services/filter-query-manger.service';
import { BaseFilterModel } from '../base-filter-model/base-filter-model';

type EndAtFilter = EmittedFilter<EndAt>;

@Component({
    selector: 'lib-end-at-query',
    templateUrl: './end-at-query.component.html'
})
export class EndAtQueryComponent extends BaseFilterModel implements BaseCapability<EndAtFilter> {
    constructor(filterQueryManger: FilterQueryMangerService) {
        super(filterQueryManger, 'endAt');
    }
}
