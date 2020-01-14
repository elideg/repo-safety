import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromVulnerabilities from './vulnerabilities.reducer';
import * as VulnerabilitiesActions from './vulnerabilities.actions';
import {
  selectAllVulnerabilities,
  selectVulnerability,
  selectVulnerabilitiesLoading,
  selectAllWithVulnerablities
  } from './vulnerabilities.selector';

@Injectable({
  providedIn: 'root'
})
export class VulnerabilitiesFacade {
  allVulnerabilities$ = this.store.pipe(select(selectAllVulnerabilities));
  selectedVulnerability$ = this.store.pipe(select(selectVulnerability));
  VulnerabilitieLoading$ = this.store.pipe(select(selectVulnerabilitiesLoading));
  allWithVulnerabilities$ = this.store.pipe(select(selectAllWithVulnerablities));

  constructor(private store: Store<fromVulnerabilities.VulnerabilitiesPartialState>) {}

  selectVulnerability(selectedVulnerabilityId: string) {
    this.dispatch(VulnerabilitiesActions.vulnerabilitySelected({ selectedVulnerabilityId }));
  }

  loadVulnerabilities() {
    this.dispatch(VulnerabilitiesActions.loadVulnerabilities());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
