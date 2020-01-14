import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as VulnerabilitiesActions from './vulnerabilities.actions';
import { Repository } from '@rv/core-data';

export const Vulnerabilities_FEATURE_KEY = 'vulnerabilities';

export interface VulnerabilitiesState extends EntityState<Repository> {
  selectedVulnerabilityId?: string | number;
  isLoading: boolean;
}

export interface VulnerabilitiesPartialState {
  readonly [Vulnerabilities_FEATURE_KEY]: VulnerabilitiesState;
}

export const VulnerabilitiesAdapter: EntityAdapter<Repository> = createEntityAdapter<Repository>(
  { selectId: (repository) => repository.url }
);

export const initialState: VulnerabilitiesState = VulnerabilitiesAdapter.getInitialState({
  // set initial required properties
  selectedVulnerabilityId: null,
  isLoading: false
});

const VulnerabilitiesReducer = createReducer(
  initialState,
  on(VulnerabilitiesActions.vulnerabilitySelected, (state, { selectedVulnerabilityId }) =>
    Object.assign({}, state, { selectedVulnerabilityId })
  ),
  on(VulnerabilitiesActions.vulnerabilitiesLoaded, (state, { vulnerabilities }) =>
    VulnerabilitiesAdapter.addAll(vulnerabilities, { ...state, isLoading: false })
  ),
  on(
    VulnerabilitiesActions.loadVulnerabilities,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: VulnerabilitiesState | undefined, action: Action) {
  return VulnerabilitiesReducer(state, action);
}
