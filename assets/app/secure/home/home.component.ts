import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-home',
  template: '<router-outlet></router-outlet>',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}