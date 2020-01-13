import { VulnerabilityService, Vulnerability } from '@rv/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rv-vulnerabilities',
  templateUrl: './vulnerabilities.component.html',
  styleUrls: ['./vulnerabilities.component.scss']
})
export class VulnerabilitiesComponent implements OnInit {
  selectedVul: Vulnerability;
  repositories$ = this.vulnerabilityService.all();

  constructor(private vulnerabilityService: VulnerabilityService) { }

  selectVul(vulnerablility) {
    window.open(vulnerablility.url);
  }

  ngOnInit() {
  }

}
