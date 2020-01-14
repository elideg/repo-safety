import { createAction, props } from '@ngrx/store';

import { Repository } from '@rv/core-data';

export const vulnerabilitySelected = createAction(
  '[Vulnerability] Vulnerability Selected',
  props<{ selectedVulnerabilityId: string }>()
);

// Load Actions
export const loadVulnerabilities = createAction('[Vulnerability] Load Vulnerabilities');

export const vulnerabilitiesLoaded = createAction(
  '[Vulnerability] Vulnerabilities Loaded',
  props<{ vulnerabilities: Repository[] }>()
);
