import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromLeft =
    trigger('fromLeft', [
        // Enter from left
        state('fromLeft', style({opacity: 1, transform: 'translateX(0)'})),

        transition('* => fromLeft', [
        style({opacity: 0, transform: 'translateX(-5%)'}),
        animate('400ms ease-in-out')
        ]),
    ]);