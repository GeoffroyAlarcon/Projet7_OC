import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

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
    let user = new User();
    this.userService
      .findUserByEmailAndPasseword(formValue['email'], formValue['motDePasse'])
      .subscribe((data) => {
        user = data['authUser'];
        sessionStorage.setItem('user', JSON.stringify(user));
        let test = sessionStorage.getItem('user');
        if (test !== null) {
          this.router.navigate(['/homePage']);
        }
      });
  }
}
