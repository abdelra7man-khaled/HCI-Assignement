import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  username: string;
  password: string;
  errorMessage: string;

  counter: number = 1;

  constructor(private _userService: UserService)
  {
    this.username = "";
    this.password = "";
    this.errorMessage = "";
  }

  signUp()
  {
    const isUserAdded = this._userService.addUser(
    {
        id: this.counter++,
        username: this.username,
        password: this.password
    });

    if (!isUserAdded)
    {
      this.errorMessage = "Username already exists!";
    }
    else
    {
      this.errorMessage = "";
      this.username = "";
      this.password = "";
    }
  }
}
