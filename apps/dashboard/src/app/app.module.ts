import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@rv/core-data';
import { MaterialModule } from '@1hm-repo-vul/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VulnerabilitiesComponent } from './vulnerabilities/vulnerabilities.component';
import { VulnerabilitesListComponent } from './vulnerabilities/vulnerabilites-list/vulnerabilites-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, VulnerabilitiesComponent, VulnerabilitesListComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreDataModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
