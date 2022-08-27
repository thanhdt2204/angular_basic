import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ToastrService } from 'ngx-toastr';
import { loginSuccessAction } from 'src/app/store/actions/user.action';
import { Constants } from 'src/app/utils/constant';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = 'thanhdoan@gmail.com';
  public password = '123456';

  constructor(
    private userService: UsersService,
    private toast: ToastrService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  handleAdd(e: Event) {
    e.preventDefault();
    this.userService.login({ email: this.email, password: this.password })
      .subscribe({
        next: data => {
          localStorage.setItem(Constants.storage.STORAGE_KEY, data);
          this.store.dispatch(loginSuccessAction({ token: data }));
          this.router.navigate(['/']);
        },
        error: error => {
          if (error.status == 500) {
            this.toast.error(Constants.message.INTERNAL_SERVER_ERROR);
          } else if (error.status == 400) {
            this.toast.warning(error.status + ': ' + error.error);
          }
        }
      })
  }

}
