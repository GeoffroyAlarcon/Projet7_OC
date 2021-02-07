import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.models';
import { User } from 'src/app/models/user.model';
import { ServiceMessage } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-one-message',
  templateUrl: './get-one-message.component.html',
  styleUrls: ['./get-one-message.component.scss'],
})
export class GetOneMessageComponent implements OnInit {
  message: Message;
  messages;
  answerForm: FormGroup;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private serviceMessage: ServiceMessage,
    private userService: UserService
  ) {}
  id: Number;
  contenu: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = Number.parseInt(value.get('id'));
    });

    this.getOnMessage();
    this.getallchild();
    this.answerForm = this.formBuilder.group({
      contenu: ['', [Validators.required]],
    });
  }

  getallchild() {
    this.serviceMessage.getAllChild(this.id).subscribe((res) => {
      this.messages = res['messages'];
    });
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }
  getOnMessage() {
    this.serviceMessage.getOneMessageById(this.id).subscribe((res) => {
      console.log(res['messageById']);
      this.message = res['messageById'];
    });
  }

  onSubmitForm() {
    let messageEnfant = new Message();
    const formValue = this.answerForm.value;
    messageEnfant.contenu = formValue['contenu'];
    messageEnfant.user = JSON.parse(sessionStorage.getItem('user'));
    messageEnfant.messageParent = this.message; // ajout de l'objet message pour mettre entre relation les réponses et le message initial
    console.log(messageEnfant);
    this.contenu = '';
    this.serviceMessage.answerMessage(messageEnfant).subscribe((res) => {
      this.getallchild();
    });
  }

  deleteMessage(id: number): void {
    this.serviceMessage
      .deleteMessage(id, this.user.email, this.user.motDePasse)
      .subscribe((res) => {
        this.getallchild();
      });
  }
  offline() {
    this.userService.disconect();
  }
}
