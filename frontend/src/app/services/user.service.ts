import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
private  _isAuth:boolean = false;

  userSubject = new Subject<User[]>();
  constructor(private httpClient: HttpClient, private router: Router) {}

  addUser(user: User) {
    return this.httpClient.post('http://localhost:3000/api/auth/signup', user);
  }
  
  public set isAuth(v : boolean) {
    this._isAuth = v;
  }

public get isAuth() : boolean {
  return this._isAuth;
}


  findUserByEmailAndPasseword(email: String, motDePasse: String):Observable<User> {
    this.isAuth = true
    return this.httpClient.post<User>('http://localhost:3000/api/auth/login', {
      email,
      motDePasse,
    });
  }

  disconect() {
    sessionStorage.clear();
    this.isAuth = false;
    this.router.navigate(['/']);
  }
  deleteUser(email: String, motDePasse: String) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    });

    return this.httpClient.delete(
      'http://localhost:3000/api/auth/deleteUser/?_email=' +
        email +
        '&_motDePasse=' +
        motDePasse,
      { headers: headers }
    );
  }
}
