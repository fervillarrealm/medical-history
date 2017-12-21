import { trigger, state, animate, transition, style } from '@angular/animations';

export const message =
    trigger('message', [
        state('void', style({opacity: 0, transform: 'translate(0, 20px) scale(0.01, 0.01)'})),
        state('leave', style({opacity: 0, transform: 'translate(0, 20px) scale(0.01, 0.01)'})),
        state('enter', style({opacity: 1, transform: 'translate(0, 0)'})),
       
        transition('void => enter', animate('450ms 100ms ease-in-out')),
        transition('enter => leave', animate('450ms 100ms ease-in-out'))
    ]);