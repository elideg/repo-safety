import { ActionReducerMap } from '@ngrx/store';

import * as fromVulnerabilities from './vulnerabilities/vulnerabilities.reducer';


export interface AppState {
  vulnerabilities: fromVulnerabilities.VulnerabilitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  vulnerabilities: fromVulnerabilities.reducer,
};

export const defaultState: AppState = {
  vulnerabilities: {ids: []} as fromVulnerabilities.VulnerabilitiesState
}
