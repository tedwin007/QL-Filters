import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinct, tap } from 'rxjs/operators';

import { QueryFiltersType } from '../models/filter-types';

@Injectable()
export class FilterQueryMangerService {
    private readonly FILTERS_API_URL = 'api/filter';
    // Getting the "entities" list from the server (for autocomplete & validation)
    public entities$ = this.http.get(`api/entities`);
    // current "Entity" in which we filter upon.
    private _entity: string = 'defaultEntity';
    // allowed props for the current "Entity"  (lets say "name" | "host" etc...)
    public entityProps$ = this.getEntityProps(this._entity).toPromise();
    private _filterChanges$ = new BehaviorSubject(undefined);

    get entity(): string {
        return this._entity;
    }

    get filterChanges$(): Observable<string> {
        return this._filterChanges$.asObservable();
    }

    get queryUrl(): URLSearchParams {
        return new URLSearchParams(location.search);
    }

    set entity(value: string) {
        this.clearSearchQuery();
        this._entity = value;
        this.entityProps$ = this.getEntityProps(value).toPromise();
    }

    constructor(private location: Location, private http: HttpClient) {
    }

    /**
     * Get Entity Props
     * @description getting the props list from the server.
     * each prop contains the filter in a "JSON" format.
     * I build an internal lib that have fromJson() and instantiate the filter
     * It's not included due to the fact it belong to the company and contain internal information
     * **/
    getEntityProps(entity: string): Observable<Object> {
        return this.http.get(`${this.FILTERS_API_URL}/${entity}/props`);
    }

    /**
     * On Search Params Change
     * @description react to changes in the browser's "url"
     * 1. informs all who listen (filterChanges$)
     * 2. send http request to fetch data that correspond to those filters
     */
    onSearchParamsChange(): Observable<string> {
        this.location.onUrlChange((change: string) => this._filterChanges$.next(change));
        return this.filterChanges$.pipe(
            distinct(),
            debounceTime(800),
            // can also be switchMap, depends on the implementation
            tap((str?: string) => this.sendFilters(str))
        );
    }

    /**
     * Update Query Params
     *
     * @param value
     */
    updateQueryParams(value: QueryFiltersType | null): void {
        !value || Object.keys(value).length === 0
            ? // Case new state is empty - remove all filters
            this.clearSearchQuery()
            : // Adding filters to the url`s query params
            this.setURLFilters(value);
    }

    private clearSearchQuery(): void {
        this.location.replaceState('/', '');
    }

    private setURLFilters(value: QueryFiltersType | null): void {
        const queryParams = new URLSearchParams();
        for (let valueKey in value) {
            queryParams.set(valueKey, value[valueKey]);
            this.location.replaceState('/', queryParams.toString());
        }
    }

    private async sendFilters(str?: string): Promise<Object | null> {
        try {
            if (!str) {
                throw new Error('missing "str" as an input in "sendFilters" method');
            }
            const url: string = this.getFilterUrl(str);
            return await this.http.get(url).toPromise();
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    private getFilterUrl(str: string): string {
        return `${this.FILTERS_API_URL}/${this._entity}/;query /${str.split('/').pop()}`;
    }
}
