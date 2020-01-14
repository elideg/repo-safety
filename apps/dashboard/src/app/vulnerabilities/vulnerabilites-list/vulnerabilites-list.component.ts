import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from '@rv/core-data';

@Component({
  selector: 'rv-vulnerabilites-list',
  templateUrl: './vulnerabilites-list.component.html',
  styleUrls: ['./vulnerabilites-list.component.scss']
})
export class VulnerabilitesListComponent {

  @Input() vulnerabilities: Repository;
  @Input() type: string;

  @Output() fixed = new EventEmitter;

  constructor() { }


  fix(vul) {
    this.fixed.emit(vul);
  }
}
