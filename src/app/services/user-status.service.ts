import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {UserStatus} from "../enums/status";

@Injectable({providedIn: 'root'})
export class UserStatusService {
  users: User[] = [
    new User('Jay'),
    new User('Jieun'),
    new User('Tyler'),
    new User('Jason', UserStatus.InActive),
    new User('Lucas'),
    new User('Shawn', UserStatus.InActive),
    new User('Jimmy'),
  ]

  userUpdated = new EventEmitter<void>()

  toggleStatus(targetUser: User) {
    const foundUser: User = this.users.find(user => user.name === targetUser.name)
    foundUser.status = foundUser.status === UserStatus.Active ? UserStatus.InActive : UserStatus.Active;
  }

  getActiveUsers() {
    return this.users.filter(user => user.status === UserStatus.Active);
  }

  getInactiveUsers() {
    return this.users.filter(user => user.status === UserStatus.InActive);
  }
}
