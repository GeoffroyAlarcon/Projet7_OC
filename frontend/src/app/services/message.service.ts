import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Message } from '../models/message.models';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root',
})
export class ServiceMessage {
  private messages: Message[] = [];
  messageSubject = new Subject<Message[]>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  emitUsers() {
    this.messageSubject.next(this.messages.slice());
  }
  saveMessage(message: Message) {
    this.emitUsers();
    console.log('message prêt à être envoyé ' + message);
    return this.httpClient
      .post('http://localhost:3000/api/message/saveMessage', message)
      .subscribe((data) => {
        console.log('donné envoyer avec succès !');
      });
  }
  getAllMessage() {
    return this.httpClient.get(
      'http://localhost:3000/api/message/getAllMessage'
    );
  }
}
