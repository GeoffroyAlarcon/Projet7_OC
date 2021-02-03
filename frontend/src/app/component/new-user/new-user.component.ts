import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import{Router} from '@angular/router'
import { User } from '../../models/user.model';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
response: any;
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
  const newUser = new User();
  newUser.nom=  formValue['nom'],
   newUser.prenom= formValue['prenom'],
   newUser.email= formValue['email'],
   newUser.departement= formValue['departement'],
   newUser.pseudo= formValue['pseudo'],
   newUser.motDePasse= formValue['motDePasse'],
  
    console.log(newUser)
  this.userService.addUser(newUser)
    .subscribe((data) => {
     this.response =data["message"];
         window.alert(this.response)
      
    });

}
}