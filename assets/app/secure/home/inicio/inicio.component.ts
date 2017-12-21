import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../_animations/index';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './inicio.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class InicioComponent {

  constructor() { }

}