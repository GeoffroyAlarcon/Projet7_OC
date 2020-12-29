import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com',"comercial","toto","test")
];
constructor(private httpClient:HttpClient){}
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.httpClient.post('/users',this.users);
    this.users.push(user);
    this.emitUsers();
  }
}