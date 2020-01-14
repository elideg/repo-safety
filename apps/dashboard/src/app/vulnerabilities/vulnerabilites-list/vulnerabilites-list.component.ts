import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from '@rv/core-data';

@Component({
  selector: 'rv-vulnerabilites-list',
  templateUrl: './vulnerabilites-list.component.html',
  styleUrls: ['./vulnerabilites-list.component.scss']
})
export class VulnerabilitesListComponent implements OnChanges {
  paganation = [0, 5];
  vuls;
  pageCount = 5;

  @Input() vulnerabilities: Repository[];
  @Input() type: string;

  @Output() fixed = new EventEmitter;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.vulnerabilities.length) {
      this.vuls = this.vulnerabilities.slice(this.paganation[0], this.paganation[1]);
      console.log(this.vuls)
    }
  }

  next() {
    this.paganation[0] = this.paganation[0] + this.pageCount;
    this.paganation[1] = this.paganation[1] + this.pageCount;
    this.vuls = this.vulnerabilities.slice(this.paganation[0], this.paganation[1]);
  }

  back() {
    this.paganation[0] = this.paganation[0] - 5;
    this.paganation[1] = this.paganation[1] - 5;
    this.vuls = this.vulnerabilities.slice(this.paganation[0], this.paganation[1]);
  }


  fix(vulnerability) {
    this.fixed.emit(vulnerability);
  }
}
