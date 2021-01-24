import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.models';
import { ServiceMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-all-message',
  templateUrl: './get-all-message.component.html',
  styleUrls: ['./get-all-message.component.scss'],
})
export class GetAllMessageComponent implements OnInit {
  private messages: [] = [];
  constructor(private serviceMessage: ServiceMessage) {}

  ngOnInit(): void {
    this.serviceMessage.getAllMessage().subscribe((data) => {
      let tab = [];
      tab = data['tab'];
      for (let row of tab) {
        console.log(row);
      }
    });
  }
}
