import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-one-message',
  templateUrl: './get-one-message.component.html',
  styleUrls: ['./get-one-message.component.scss'],
})
export class GetOneMessageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviceMessage: ServiceMessage
  ) {}
  id: number;
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = Number.parseInt(value.get('id'));
    })
  
  this.serviceMessage.getOneMessageById(this.id).subscribe((data) => {
    console.log(data);
  })
  }
}
