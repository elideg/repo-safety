import { GraphqlService, Repository, RepositoriesType } from '@rv/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@rv/core-data';

@Component({
  selector: 'rv-vulnerabilities',
  templateUrl: './vulnerabilities.component.html',
  styleUrls: ['./vulnerabilities.component.scss']
})
export class VulnerabilitiesComponent implements OnInit {
  selectedVul: Repository;
  repositories$: Observable<RepositoriesType> = this.graphqlService.all();
  token = '';

  constructor(
    private graphqlService: GraphqlService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  selectVul(vulnerablility: Repository) {
    window.open(vulnerablility.url);
  }

  setToken() {
    this.authService.setToken(this.token);
    this.repositories$ = this.graphqlService.all();
  }

}
