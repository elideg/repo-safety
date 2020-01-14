import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  Vulnerabilities_FEATURE_KEY,
  VulnerabilitiesAdapter,
  VulnerabilitiesPartialState,
  VulnerabilitiesState
} from './vulnerabilities.reducer';

// Lookup the 'Vulnerabilities' feature state managed by NgRx
export const selectVulnerabilitiesState = createFeatureSelector<
  VulnerabilitiesPartialState,
  VulnerabilitiesState
>(Vulnerabilities_FEATURE_KEY);

const { selectAll, selectEntities } = VulnerabilitiesAdapter.getSelectors();

export const selectVulnerabilitiesLoading = createSelector(
  selectVulnerabilitiesState,
  (state: VulnerabilitiesState) => state.isLoading
);

export const selectAllVulnerabilities = createSelector(
  selectVulnerabilitiesState,
  (state: VulnerabilitiesState) => selectAll(state)
);

export const selectVulnerabilitiesEntities = createSelector(
  selectVulnerabilitiesState,
  (state: VulnerabilitiesState) => selectEntities(state)
);

export const selectVulnerabilityId = createSelector(
  selectVulnerabilitiesState,
  (state: VulnerabilitiesState) => state.selectedVulnerabilityId
);

export const selectAllWithVulnerablities = createSelector(
  selectAllVulnerabilities,
  (vulnerabilities) => vulnerabilities.filter((vul) => vul.vulnerabilityAlerts.totalCount > 0)
)

export const selectVulnerability = createSelector(
  selectVulnerabilitiesEntities,
  selectVulnerabilityId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
