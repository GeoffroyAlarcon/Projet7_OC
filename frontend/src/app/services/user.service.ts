import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:"root"
})

export class UserService {
  private users: User[] = [];
  
  constructor(private httpClient: HttpClient) {}
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
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

  findUserByEmailAndPasseword(user: User) {
    this.emitUsers();
    return this.httpClient.post('http://localhost:3000/api/auth/login', user).subscribe(
        (data: User) => {
          user = data
return user
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }
}
