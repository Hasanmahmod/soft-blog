import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardModule } from './dashboard/dashboard.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NaveBarComponent } from './layouts/nave-bar/nave-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategorySingleComponent } from './pages/category-single/category-single.component';
import { PostSingleComponent } from './pages/post-single/post-single.component';
import { TrmsConComponent } from './pages/trms-con/trms-con.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptinFormComponent } from './subscriptin-form/subscriptin-form.component';
import { CommentComponent } from './commetns/comment/comment.component';
import { CommentListComponent } from './commetns/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { PageComponent } from './pages/page/page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaveBarComponent,
    FooterComponent,
    HomeComponent,
    CategorySingleComponent,
    PostSingleComponent,
    TrmsConComponent,
    AboutUsComponent,
    ContactUsComponent,
    SubscriptinFormComponent,
    CommentComponent,
    CommentListComponent,
    PostCardComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
