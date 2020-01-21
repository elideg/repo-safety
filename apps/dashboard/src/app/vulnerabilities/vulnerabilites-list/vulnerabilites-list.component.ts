import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from '@rv/core-data';

@Component({
  selector: 'rv-vulnerabilites-list',
  templateUrl: './vulnerabilites-list.component.html',
  styleUrls: ['./vulnerabilites-list.component.scss']
})
export class VulnerabilitesListComponent implements OnChanges {
  pageIndex = 0;
  pageSize = 10;
  lowValue = 0;
  highValue = 10;
  vuls;

  @Input() vulnerabilities: Repository[];
  @Input() type: string;

  @Output() fixed = new EventEmitter;

  constructor() {
  }

  ngOnChanges() {
    this.vuls = this.vulnerabilities;
  }


  fix(vulnerability) {
    this.fixed.emit(vulnerability);
  }

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
    }
    else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
      }
      this.pageIndex = event.pageIndex;
  }
}
