import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserStatusService} from "../services/user-status.service";

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUsers: User[] = [];

  constructor(private userStatusService: UserStatusService) {
    this.activeUsers = this.userStatusService.getActiveUsers();
    this.userStatusService.userUpdated.subscribe(() => this.activeUsers = this.userStatusService.getActiveUsers())

  }

  ngOnInit(): void {
  }

  inActiveUser(user: User) {
    this.userStatusService.toggleStatus(user);
    this.userStatusService.userUpdated.emit();
    this.activeUsers = this.userStatusService.getActiveUsers();
  }
}
