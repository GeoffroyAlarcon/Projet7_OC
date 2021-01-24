import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();
  constructor(private httpClient: HttpClient, private router: Router) {}


  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  getUsers() {
    this.emitUsers();
    return this.users;
  }

  addUser(user: User) {
    this.emitUsers();
    return this.httpClient
      .post('http://localhost:3000/api/auth/signup', user)
     
  }

  findUserByEmailAndPasseword(email: String, motDePasse: String) {
    return  this.httpClient
        .post('http://localhost:3000/api/auth/login', { email, motDePasse })
       
  }

disconect(){
sessionStorage.removeItem("user");
this.router.navigate(["/"])
}
deleteUser(user:String){
return this.httpClient.delete('http://localhost:3000/api/auth/deleteUser')
}

}
