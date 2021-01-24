import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  messageForm: FormGroup;
  maDate = Date.now();
  user = new User();
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let authUser = JSON.parse(sessionStorage.getItem('user'));
    this.user.nom = authUser['nom'];
    this.user.prenom = authUser['prenom'];
    this.initForm();
  }
  initForm() {
    this.messageForm = this.formBuilder.group({});
  }
  onSubmitForm() {}
  offline() {
    this.userService.disconect();
  }
}
