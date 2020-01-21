import { VulnerabilitiesComponent } from './vulnerabilities/vulnerabilities.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: '', component: VulnerabilitiesComponent},
    // { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
