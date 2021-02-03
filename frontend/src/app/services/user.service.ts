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

  userSubject = new Subject<User[]>();
  constructor(private httpClient: HttpClient, private router: Router) {}

  addUser(user: User) {
    return this.httpClient.post('http://localhost:3000/api/auth/signup', user);
  }

  findUserByEmailAndPasseword(email: String, motDePasse: String) {
    return this.httpClient.post('http://localhost:3000/api/auth/login', {
      email,
      motDePasse,
    });
  }

  disconect() {
    sessionStorage.clear();
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
