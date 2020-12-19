import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  checkoutForm
  constructor( private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      email: '',
     password: ''
    });

  }

  ngOnInit(): void {
    

    }

}
