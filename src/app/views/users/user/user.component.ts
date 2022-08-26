import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UsersService) { }

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

  ngOnInit(): void {
    this.getAllUsers(this.currentPage);
  }

}
