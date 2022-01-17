import { Component, OnInit } from '@angular/core';
import {UserStatusService} from "../services/user-status.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inactiveUsers: User[] = [];

  constructor(private userStatusService: UserStatusService) {
    this.inactiveUsers = this.userStatusService.getInactiveUsers();
    this.userStatusService.userUpdated.subscribe(() => this.inactiveUsers = this.userStatusService.getInactiveUsers())
  }

  ngOnInit(): void {
  }

  activeUser(user: User) {
    this.userStatusService.toggleStatus(user);
    this.userStatusService.userUpdated.emit();
    this.inactiveUsers = this.userStatusService.getInactiveUsers();
  }
}
