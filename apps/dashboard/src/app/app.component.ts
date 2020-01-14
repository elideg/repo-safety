import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/about', icon: 'help', title: 'About'},
    { path: '/vul', icon: 'feedback', title: 'Vulnerabilities'}
  ]

}
