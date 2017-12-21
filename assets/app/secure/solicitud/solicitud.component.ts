import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-solicitud',
  template: `<div class="view-side-form">
              <router-outlet></router-outlet>
            </div>`,
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SolicitudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}