import { trigger, state, animate, transition, style } from '@angular/animations';

export const symbol =
    trigger('symbol', [
        state('void', style({opacity: 0, transform: 'rotate(90deg) scale(0.1, 0.1)'})),
        state('leave', style({opacity: 0, transform: 'rotate(90deg) scale(0.1, 0.1)'})),
        state('enter', style({opacity: 1, transform: 'rotate(0deg)'})),
        
        transition('void => enter', animate('450ms 100ms ease-in-out')),
        transition('enter => leave', animate('450ms 100ms ease-in-out'))
    ]);