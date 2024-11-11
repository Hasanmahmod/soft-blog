import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http'; 

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../../../src/environments/environment.prod'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AllPostComponent } from './all-post/all-post.component';



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
    FooterComponent,
    AllPostComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firbaseconfig), // Initialize Firebase
    AngularFirestoreModule,
    AngularFireAuthModule, // Optional: for Firebase Authentication
   // AngularFireDatabaseModule, // Optional: for Firebase Realtime Database

    FormsModule,
    DashboardRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
