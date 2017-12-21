import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const short =
    trigger('short', [
       
        transition('void => enter', [
        animate('450ms 200ms ease-in-out', keyframes([
            style({opacity: 0, transform: 'scale(0, 0)', offset: 0}),
            style({transform: 'scale(1.5, 1.5)', offset: 0.35}),
            style({transform: 'scale(0.9, 0.9)',  offset: 0.85}),
            style({opacity: 1, transform: 'scale(1, 1)',  offset: 1.0})
        ]))
        ])
    ]);