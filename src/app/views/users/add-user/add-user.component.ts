import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Constants } from 'src/app/utils/constant';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../user/user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('', Validators.email),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private router: Router,
    private userService: UsersService,
    private toast: ToastrService,
    private dataService: DataService) { }

  handleCancel() {
    this.router.navigate(['/user']);
  }

  handleAdd() {
    this.userService.saveUser(this.userForm.value)
      .subscribe({
        next: data => {
          this.dataService.saveSuccess(true);
          this.router.navigate(['/user']);
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
  }

}
