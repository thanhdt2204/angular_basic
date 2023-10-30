import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
    '<div style=" color: white;text-align: center; margin-top: 260px; font-weight: bold">' +
    'Welcome To Angular Sample Project' +
    '</div>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
