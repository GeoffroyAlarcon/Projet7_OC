import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ResolveEnd, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  authForm: FormGroup;
  users: User[];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.authForm.value;
    console.log('hello world');
    let user;
    new Promise((resolve, reject) => {
      user = this.userService.findUserByEmailAndPasseword(
        formValue['email'],
        formValue['motDePasse']
      );
      resolve;
    });
    console.log(user);
  }
}
