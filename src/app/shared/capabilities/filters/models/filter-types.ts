import { LogicalOperators } from './logical-operators';

export interface EndAt {
  endAt: string;
}

export interface StartAt {
  startAt: string;
}

export interface SearchTerm {
  searchTerm: string;
}

export interface EmittedFilter<T = any> {
  unique?: boolean;
  key: string;
  value: T;
}

export type FiltersTypes = Partial<EndAt & StartAt & SearchTerm>;
export type QueryFiltersType = EmittedFilter<LogicalOperators> | EmittedFilter;
