import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.models';
import { User } from 'src/app/models/user.model';
import { ServiceMessage } from '../../services/message.service';
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit {
  messageForm: FormGroup;
  maDate = Date.now();
  user = new User();
  constructor(
    private formBuilder: FormBuilder,
    private serviceMessage : ServiceMessage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.messageForm = this.formBuilder.group({
      contenu: ['', Validators.required],
      titre: ['', Validators.required],
    });
  }
  onSubmitForm() {
    let userSesion = JSON.parse(sessionStorage.getItem('user'));
    let user = new User();
    user.nom = userSesion['nom'];
    user.prenom = userSesion['prenom'];
    user.email = userSesion['email'];
    user.departement = userSesion['departement'];
    user.pseudo = userSesion['pseudo'];
    user.id = userSesion['id'];

    let message = new Message();
    const formValue = this.messageForm.value;
    message.contenu = formValue['contenu'];
    message.titre = formValue['titre'];
    message.datePost = Date.now();
    message.messageParent = null;
    message.user = user;
    console.log(message);
  this.serviceMessage.saveMessage(message);
  }
}
