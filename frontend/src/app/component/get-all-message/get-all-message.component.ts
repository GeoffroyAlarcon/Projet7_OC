import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.models';
import { ServiceMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-all-message',
  templateUrl: './get-all-message.component.html',
  styleUrls: ['./get-all-message.component.scss'],
})
export class GetAllMessageComponent implements OnInit {
  messages: any[] = [];
  constructor(private serviceMessage: ServiceMessage, private router: Router) {}

  ngOnInit(): void {
    this.serviceMessage.getAllMessage().subscribe((data) => {
      let tab = [];
      tab = data['tab'];
      for (let row of tab) {
        console.log(row);
        this.messages.push(row);
      }
    });
  }

  deleteMessage(id: number): void {
    console.log(id);
    this.serviceMessage.deleteMessage(id).subscribe((data) => {
    });
  }
}
