// dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';  
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:'',component:OverviewComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
