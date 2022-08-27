import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['../user/user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  @Input() email = '';

  @Output() f_delete = new EventEmitter<any>();

  constructor() { }

  handleDelete() {
    this.f_delete.emit();
  };

  ngOnInit(): void {
  }

}
