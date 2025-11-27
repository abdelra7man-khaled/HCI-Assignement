import { Injectable } from '@angular/core';


export interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: User[];

  constructor ()
  {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: User): boolean
  {
    if(newUser.username == "" || newUser.password == "")
      return false;

    newUser.username = newUser.username.trim();
    newUser.password = newUser.password.trim();

    const isUserExists = this.users.some(u => u.username === newUser.username);
    if (isUserExists) return false;

    this.users.push(newUser);
    return true;
  }

  deleteUser(username: string)
  {
    this.users = this.users.filter(u => u.username !== username);
  }
}
