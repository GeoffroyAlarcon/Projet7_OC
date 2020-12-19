import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule} from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import{UserService} from "./services/user.service";
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  {path :'newUser', component: NewUserComponent },
  {path :'', component:  HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NewUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
