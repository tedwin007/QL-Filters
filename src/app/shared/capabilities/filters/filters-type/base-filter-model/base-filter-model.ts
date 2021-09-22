import { EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmittedFilter } from '../../models/filter-types';
import { FilterQueryMangerService } from '../../services/filter-query-manger.service';

export class BaseFilterModel implements OnDestroy, OnInit {
    filterValue: string;
    public template: string = 'standard';
    public onDone: EventEmitter<string>;
    protected ngUnsubscribe = new Subject();
    protected isUniqueValue: boolean = false;
    @Output() onValueChange: EventEmitter<EmittedFilter> = new EventEmitter<EmittedFilter>();

    protected constructor(
        protected filterQueryManger: FilterQueryMangerService,
        public capabilityName: string
    ) {
    }

    ngOnInit(): void {
        this.filterQueryManger.filterChanges$
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => this.listenToQueryUrl());

        let filterValues = this.filterQueryManger.queryUrl.getAll(this.capabilityName);
        Array.isArray(filterValues) && filterValues.length > 0
            ? this.valueChange(filterValues.join(',')) : (this.filterValue = '');
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    valueChange(value: string): void {
        this.onValueChange.emit(this.getFilterValue(value));
        this.filterValue = value;
    }

    getFilterValue(value?: string): EmittedFilter {
        return {
            key: this.capabilityName,
            value: value || this.filterValue,
            unique: this.isUniqueValue
        };
    }

    protected listenToQueryUrl() {
        let all = this.filterQueryManger.queryUrl.get(this.capabilityName);
        if (Array.isArray(all) && all.length > 0) {
            this.valueChange(all.join(','));
            return;
        }
        this.filterValue = all;
    }
}
