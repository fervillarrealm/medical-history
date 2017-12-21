import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromRight =
    trigger('fromRight', [
        // Enter from right
        state('fromRight', style({opacity: 1, transform: 'translateX(0)'})),

        transition('* => fromRight', [
        style({opacity: 0, transform: 'translateX(5%)'}),
        animate('400ms ease-in-out')
        ]),
    ]);