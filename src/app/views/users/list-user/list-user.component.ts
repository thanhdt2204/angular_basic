import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPage } from 'src/app/models/userPage';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['../user/user.component.scss']
})
export class ListUserComponent implements OnInit {

  lodash = _;
  @Input() userPage = new UserPage;
  @Input() currentPage = 0;

  @Output() f_changePage = new EventEmitter<number>();
  @Output() f_buttonDelete = new EventEmitter<string>();
  @Output() f_buttonUpdate = new EventEmitter<string>();

  constructor() { }

  handleChangePage(pageNumber: number) {
    this.f_changePage.emit(pageNumber);
  };

  handleButtonDelete(email: string) {
    this.f_buttonDelete.emit(email);
  };

  handleButtonUpdate(email: string) {
    this.f_buttonUpdate.emit(email);
  };

  ngOnInit(): void {
  }

}
