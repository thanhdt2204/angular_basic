import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template:
    '<div style=" color: white;text-align: center; margin-top: 260px; font-weight: bold">' +
    'See you later !' +
    '</div>'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
