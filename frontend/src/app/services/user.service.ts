import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  getUsers() {
    this.emitUsers();
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
    return this.httpClient
      .post('http://localhost:3000/api/auth/signup', user)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  showUser() {
    let test = sessionStorage.getItem('user');

    return test;
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
