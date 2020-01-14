import { AboutModule } from './about/about.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VulnerabilitiesModule } from './vulnerabilities/vulnerabilities.module';

const routes: Routes = [
    { path: 'about', loadChildren: () =>  AboutModule},
    { path: 'vul', loadChildren: () => VulnerabilitiesModule},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }