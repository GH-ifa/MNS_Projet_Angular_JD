import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  user:User = {} as User;

  constructor() {

  }

  setCurrentUser(user:User): void {
    this.user = user;
  }

  getCurrentUser(): User {
    return this.user;
  }

  isCurrentUser(userId:number): boolean {
    return this.user.id === userId;
  }
}
