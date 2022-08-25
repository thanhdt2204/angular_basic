import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Constants } from 'src/app/utils/constant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userPage: any;
  currentPage: number = 0;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers({ page: this.currentPage, size: Constants.pagination.PAGE_SIZE })
      .subscribe({
        next: data => {
          this.userPage = data;
          console.log("Userpage: ", this.userPage);
        }
      })
  }

}
