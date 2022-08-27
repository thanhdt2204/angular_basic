import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { logoutSuccessAction } from 'src/app/store/actions/user.action';
import { Constants } from 'src/app/utils/constant';
import { selectStore } from '../../store/selectors/store.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.store.select(selectStore).subscribe(data => {
      this.isLoggedIn = data.isLoggedIn
    });
  }

  handleLogout() {
    localStorage.removeItem(Constants.storage.STORAGE_KEY);
    this.store.dispatch(logoutSuccessAction());
    this.router.navigate(['/login']);
  }

}
