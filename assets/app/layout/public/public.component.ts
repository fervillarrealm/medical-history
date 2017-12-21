import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderPublicComponent } from './header/header.public.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}