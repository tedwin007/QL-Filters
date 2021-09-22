import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EmittedFilter } from './shared/capabilities/filters/models/filter-types';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    @ViewChild('filtersVCR', {read: ViewContainerRef}) vcr;
    public current?: EmittedFilter;

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        // To prevent Change After Checked Error
        this.cd.detectChanges();
    }

    setCurrent($event: EmittedFilter): void {
        this.current = $event;
    }
}
