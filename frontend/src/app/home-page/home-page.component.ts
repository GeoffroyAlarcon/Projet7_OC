import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
   user = new User();
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let authUser = JSON.parse(sessionStorage.getItem('user'));
    this.user.nom = authUser['nom'];
    this.user.prenom = authUser['prenom'];

  }
}
