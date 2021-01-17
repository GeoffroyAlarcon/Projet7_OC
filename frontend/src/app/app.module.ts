import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import {  NgModule} from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import{UserService} from "./services/user.service";
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import{HomePageComponent} from'./home-page/home-page.component'

const appRoutes: Routes = [
  {path :'newUser', component: NewUserComponent },
  {path :'', component:  HomeComponent},
  { path: 'users', component: UserListComponent },
  { path: 'homePage', component: HomePageComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NewUserComponent,
    HomeComponent,
    UserListComponent,
  HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
