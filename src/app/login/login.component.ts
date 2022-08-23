import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = 'thanhdoan@gmail.com';
  public password = '123456';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  handleAdd(e: Event) {
    e.preventDefault();
    this.userService.login({ email: this.email, password: this.password })
      .subscribe({
        next: data => console.log(data),
        error: error => console.log(error),
      })
  }

}
