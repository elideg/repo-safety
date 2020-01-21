import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as vulnerabilitiesActions from './vulnerabilities.actions';
import { Repository, GraphqlService } from '@rv/core-data';
import { VulnerabilitiesPartialState } from './vulnerabilities.reducer';


@Injectable()
export class VulnerabilitiesEffects {
  loadVulnerabilities$ = createEffect(() =>
    this.dataPersistence.fetch(vulnerabilitiesActions.loadVulnerabilities, {
      run: (
        action: ReturnType<typeof vulnerabilitiesActions.loadVulnerabilities>,
        state: VulnerabilitiesPartialState
      ) => {
        return this.graphqlService.all().pipe(
          map((vulnerabilities: Repository[]) => vulnerabilitiesActions.vulnerabilitiesLoaded({ vulnerabilities }))
        );
      },
      onError: (action: ReturnType<typeof vulnerabilitiesActions.loadVulnerabilities>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<VulnerabilitiesPartialState>,
    private graphqlService: GraphqlService
  ) {}
}
