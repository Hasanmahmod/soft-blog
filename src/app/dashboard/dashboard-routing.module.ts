// dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';  
import { OverviewComponent } from './overview/overview.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { AllPostComponent } from './all-post/all-post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:'',component:OverviewComponent},
    {path:'cat',component:CategoryComponent},
    {path:'allpost',component:AllPostComponent},
    {path:'newpost',component:PostComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
