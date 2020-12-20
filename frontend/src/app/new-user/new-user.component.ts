import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

import { User } from '../models/user.model';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder : FormBuilder,              private userService: UserService,
   ) { }

  ngOnInit() {
    
    this.initForm();
  }
initForm(){
this.userForm = this.formBuilder.group(
{
   prenom: "",
   nom: "",
   email: "",
   departement:"",
   peusdo:"",
   motDePasse:""
}

)
}
onSubmitForm() {
  const formValue = this.userForm.value;
  const newUser = new User(
    formValue['nom'],
    formValue['prenom'],
    formValue['email'],
    formValue['departement'],
    formValue['pseudo'],
    formValue['motDePasse'],
    );
  this.userService.addUser(newUser);

}
}