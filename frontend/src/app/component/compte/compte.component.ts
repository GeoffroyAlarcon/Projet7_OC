import { Component, OnInit } from '@angular/core';
import { disconnect } from 'process';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss'],
})
export class CompteComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  deleteAccount() {
    this.userService
      .deleteUser(this.user.email, this.user.motDePasse)
      .subscribe((res) => {
        this.offline();
      });
  }
  offline() {
    this.userService.disconect();
  }
}
