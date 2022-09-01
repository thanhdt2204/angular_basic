import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['../user/user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnChanges {

  userForm = new FormGroup({
    id: new FormControl(0),
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  @Input() email = '';

  @Output() f_update = new EventEmitter<any>();

  constructor(private userService: UsersService) { }

  loadUser(email: any) {
    this.userService.getUser(email)
      .subscribe(data => this.userForm.setValue(data))
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.email) {
      this.loadUser(this.email);
    }
  }

  handleUpdate() {
    this.f_update.emit(this.userForm.value);
  }

}
