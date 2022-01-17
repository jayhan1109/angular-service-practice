import {UserStatus} from "../enums/status";

export class User {
  constructor(public name: string, public status: UserStatus = UserStatus.Active) {
  }
}
