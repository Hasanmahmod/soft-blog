import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CommentComponent } from './comment/comment.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    PostComponent,
    SubscriptionComponent,
    CommentComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
