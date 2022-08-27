import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectStore } from 'src/app/store/selectors/store.selector';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  isLoggedIn: boolean = false;

  handleToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.store.select(selectStore).subscribe(data => {
      this.isLoggedIn = data.isLoggedIn
    });
  }

}
