import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.models';
import { ServiceMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-one-message',
  templateUrl: './get-one-message.component.html',
  styleUrls: ['./get-one-message.component.scss'],
})
export class GetOneMessageComponent implements OnInit {
  message: Message;
  answerForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private serviceMessage: ServiceMessage
  ) {}
  id: number;
  ngOnInit(): void {
    this.answerForm = this.formBuilder.group({
      contenu: ['', [Validators.required]],
    });

    this.route.paramMap.subscribe((value) => {
      this.id = Number.parseInt(value.get('id'));
    });

    this.serviceMessage.getOneMessageById(this.id).subscribe((data) => {
      this.message = data['messageById'];
      console.log(this.message)
    });
  }

  onSubmitForm() {
    let messageEnfant = new Message();
    const formValue = this.answerForm.value;

    messageEnfant.contenu = formValue['contenu'];
    messageEnfant.user = JSON.parse(sessionStorage.getItem('user'));
    messageEnfant.messageParent= this.message;

    console.log(messageEnfant);
       this.serviceMessage.answerMessage(messageEnfant).subscribe(res =>{
        console.log("test réussi ")
       }   );
  }
}
