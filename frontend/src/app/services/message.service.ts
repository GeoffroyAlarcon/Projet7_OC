import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Message } from '../models/message.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceMessage {
  private messages: Message[] = [];
  messageSubject = new Subject<Message[]>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  saveMessage(message: Message) {
    console.log('message prêt à être envoyé ' + message);
    return this.httpClient.post(
      'http://localhost:3000/api/message/saveMessage',
      message
    );
  }
  getAllMessage() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    });
    console.log(headers.get('Content-Type'));
    return this.httpClient.get(
      'http://localhost:3000/api/message/getAllMessage',
      { headers: headers }
    );
  }
  deleteMessage(id: Number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    });
    console.log(' la donnée est ' + id);
    return this.httpClient.delete(
      'http://localhost:3000/api/message/deleteMessage/?_id=' + id,
      { headers: headers }
    );
  }
  answerMessage(message: Message) {
  
    return this.httpClient.post(
      'http://localhost:3000/api/message/answerMessage',
      message
    );
  }

  getOneMessageById(id: number): Observable<Message> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    });
    return this.httpClient.get<Message>(
      'http://localhost:3000/api/message/getOneMessage/?_id=' + id,
      { headers: headers }
    );
  }
}
