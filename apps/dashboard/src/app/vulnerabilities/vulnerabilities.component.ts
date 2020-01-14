import { VulnerabilitiesFacade } from '@rv/core-state';
import { GraphqlService, Repository, RepositoriesType, AuthService } from '@rv/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'rv-vulnerabilities',
  templateUrl: './vulnerabilities.component.html',
  styleUrls: ['./vulnerabilities.component.scss']
})
export class VulnerabilitiesComponent implements OnInit {
  selectedVul: Repository;
  repositories$: Observable<Repository[]> = this.vulnerabilitiesFacade.allVulnerabilities$;
  withVulnerabilities: Observable<Repository[]> = this.vulnerabilitiesFacade.allWithVulnerabilities$;
  token = '';

  constructor(
    private graphqlService: GraphqlService,
    private authService: AuthService,
    private vulnerabilitiesFacade: VulnerabilitiesFacade
  ) { }

  ngOnInit() {
    this.vulnerabilitiesFacade.loadVulnerabilities();
  }

  selectVulnerability(vulnerablility: Repository) {
    window.open(vulnerablility.url);
  }

  setToken() {
    this.authService.setToken(this.token);
  }

}
