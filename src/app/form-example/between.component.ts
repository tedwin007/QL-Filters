import { Component } from '@angular/core';
import { EmittedFilter } from '../shared/capabilities/filters/models/filter-types';

@Component({
    selector: 'between-filter',
    template: `
        <ng-container [startAtQuery] [endAtQuery] (onValueChange)="setBetween($event)">
            <div>{{value | json}}</div>
        </ng-container>`,
})
export class BetweenComponent {
    public value: EmittedFilter;

    setBetween($event: EmittedFilter) {
        this.value = $event;
    }
}
