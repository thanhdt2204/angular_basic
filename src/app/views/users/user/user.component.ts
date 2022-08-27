import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserPage } from 'src/app/models/userPage';
import { UsersService } from 'src/app/services/users.service';
import { Constants } from 'src/app/utils/constant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userPage: UserPage = new UserPage;
  currentPage: number = 0;
  email: string = '';

  constructor(private userService: UsersService, private toast: ToastrService) { }

  getAllUsers(currentPage: number): any {
    this.userService.getAllUsers({ page: currentPage, size: Constants.pagination.PAGE_SIZE })
      .subscribe({
        next: data => this.userPage = data
      })
  }

  f_changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getAllUsers(pageNumber);
  }

  f_buttonDelete(email: string) {
    this.email = email;
  }

  f_delete() {
    this.userService.deleteUser(this.email)
      .subscribe({
        next: data => {
          this.currentPage = 0;
          this.getAllUsers(this.currentPage);
          this.toast.success(Constants.message.DELETE_USER_SUCCESSFULLY);
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
  ngOnInit(): void {
    this.getAllUsers(this.currentPage);
  }

}
