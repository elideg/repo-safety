import { VulnerabilityService } from '@rv/core-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dashboard';

  constructor() {}

  ngOnInit() {
  }
}
