import { trigger, state, animate, transition, style } from '@angular/animations';

export const overlay =
    trigger('overlay', [
        state('void', style({opacity: 0})),
        state('leave', style({opacity: 0})),
        state('enter', style({opacity: 1})),

        transition('void => enter', animate('450ms ease-in-out')),
        transition('enter => leave', animate('450ms ease-in-out'))
    ])