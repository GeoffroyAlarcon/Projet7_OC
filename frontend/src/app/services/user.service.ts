import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  findUserByPasswordAndPseudo(user: User) {
    for (let x = 0; x < this.users.length; x++) {
      if (
        this.users[x].email == user.email &&
        this.users[x].motDePasse == user.motDePasse
      ) {
        return this.users[x];
      }
      return null;
    }
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
