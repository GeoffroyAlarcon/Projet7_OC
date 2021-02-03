import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.models';
import { User } from 'src/app/models/user.model';
import { ServiceMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-all-message',
  templateUrl: './get-all-message.component.html',
  styleUrls: ['./get-all-message.component.scss'],
})
export class GetAllMessageComponent implements OnInit {
  messages: any[] = [];
  user: User = JSON.parse(sessionStorage.getItem('user'));
  constructor(private serviceMessage: ServiceMessage, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user.pseudo);

    this.displayGetAll();
  }

  deleteMessage(id: number): void {
    console.log(id);
    this.serviceMessage
      .deleteMessage(id, this.user.email, this.user.motDePasse)
      .subscribe((res) => {
        this.displayGetAll();
      });
  }

  displayGetAll() {
    this.serviceMessage.getAllMessage().subscribe((res) => {
      this.messages = res['messages'];
    });
  }
}
