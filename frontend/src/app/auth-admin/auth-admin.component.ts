import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.scss']
})
export class AuthAdminComponent implements OnInit {
  authForm: FormGroup;
  constructor(private userService: UserService, private formBuilder:FormBuilder,private router:Router) { }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.authForm.value;
    let user = new User();
    let token;
    this.userService
      .loginForAdmin(formValue['email'], formValue['motDePasse'])
      .subscribe((data) => {
        user = data['authUser'];
        token = data['token'];
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        let test = sessionStorage.getItem('user');
        if (test !== null) {
          this.router.navigate(['/homePage']);
        }
      });
  }
}