import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    let authUser = sessionStorage.getItem('user');
   console.log("Lle test a été réalisé avec succès " +JSON.parse(authUser).nom)
   
    
    }

}
