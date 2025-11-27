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

  counterId: number = 1;

  constructor(private _userService: UserService)
  {
    this.username = "";
    this.password = "";
    this.errorMessage = "";
  }

  signUp()
  {
    this.errorMessage = "";
    const isUserAdded = this._userService.addUser(
    {
        id: this.counterId++,
        username: this.username,
        password: this.password
    });

    if (!isUserAdded)
    {
       if(this.username === "" || this.password === "")
       {
          this.errorMessage = "Username and Password required!";
       }
       else
       {
          this.errorMessage = "Username already exists!";
       }
    }
    else
    {
      this.errorMessage = "user added successfully";
      this.username = "";
      this.password = "";
    }
  }
}
