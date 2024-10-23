import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategorySingleComponent } from './pages/category-single/category-single.component';
import { PostSingleComponent } from './pages/post-single/post-single.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TrmsConComponent } from './pages/trms-con/trms-con.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [{path:'',component:PageComponent,children:[
  {path:'',component:HomeComponent},
  {path:'category',component:CategorySingleComponent}, 
  {path:'post',component:PostSingleComponent},

  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'terms-condition',component:TrmsConComponent},

]} ,
{ path: 'deshboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
