import { Component } from "@angular/core";
import { moveIn, fallIn, moveInLeft, slideInOut, fadeInAnimation } from '../../../_animations/index';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['toolbar.component.css'],
    animations: [moveIn, fallIn, moveInLeft, fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
})

export class ToolbarSecureComponent {

}