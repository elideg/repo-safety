import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../../../../libs/material/src/lib/material.module';
import { VulnerabilitiesComponent } from './vulnerabilities.component';
import { VulnerabilitesListComponent } from './vulnerabilites-list/vulnerabilites-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VulnerabilitiesRoutingModule } from './vulnerabilities-routing.module';


@NgModule({
  declarations: [VulnerabilitesListComponent, VulnerabilitiesComponent],
  imports: [
    CommonModule,
    VulnerabilitiesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class VulnerabilitiesModule { }
