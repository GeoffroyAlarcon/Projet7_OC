import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import{Router} from '@angular/router'
import { User } from '../models/user.model';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder : FormBuilder,              private userService: UserService,
  private router:Router 
    ) { }

  ngOnInit() {
    
    this.initForm();
  }
initForm(){
this.userForm = this.formBuilder.group(
{
   prenom:  ["",Validators.required],
   nom: ["",Validators.required],
   email: ["",[Validators.required, Validators.email]],
   departement:["",Validators.required],
   pseudo:["",Validators.required],
   motDePasse:["",Validators.required],
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
    console.log(newUser);
  this.userService.addUser(newUser);
  this.router.navigate(['/homePage']);
}
}