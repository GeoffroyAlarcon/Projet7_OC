import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { TokenType } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  users: User[];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.authForm.value;
    let user = new User();
    let token
    this.userService
      .findUserByEmailAndPasseword(formValue['email'], formValue['motDePasse'])
      .subscribe((data) => {  
        user = data['authUser'];
        token = data['token'];
        sessionStorage.setItem("token",JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        let test = sessionStorage.getItem('user');
        if (test !== null) {
          this.router.navigate(['/homePage']);
        }
      });
  }
}
