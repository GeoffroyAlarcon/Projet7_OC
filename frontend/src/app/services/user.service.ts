import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor(private httpClient: HttpClient) {}
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

   findUserByEmailAndPasseword(email: String, motDePasse: String) {
let user;

  user = new User(email, motDePasse, '', '', '', '');
  this.httpClient
      .post('http://localhost:3000/api/auth/login', user)
      .subscribe(
        (data) => {
          console.log(data)
          user.nom = data['authUser']['nom'];
          user.departement = data['authUser']['departement'];
          user.email = data['authUser']['email'];
          user.prenom = data['authUser']['prenom'];
          user.pseudo = data['authUser']['pseudo'];
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  
  return user;   
  
  }
}
