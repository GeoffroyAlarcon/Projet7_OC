import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { UserService } from './services/user.service';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './component/new-user/new-user.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HomeComponent } from './component/home/home.component';
import { NewMessageComponent } from './component/new-message/new-message.component';
import { GetAllMessageComponent } from './component/get-all-message/get-all-message.component';
import { GetOneMessageComponent } from './component/get-one-message/get-one-message.component';
import { CompteComponent } from './component/compte/compte.component';

const appRoutes: Routes = [
  { path: 'newUser', component: NewUserComponent },
  { path: '', component: HomeComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'homePage/message/:id', component: GetOneMessageComponent },
  { path: 'compte', component: CompteComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NewUserComponent,
    HomeComponent,
    HomePageComponent,
    NewMessageComponent,
    GetAllMessageComponent,
    GetOneMessageComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
