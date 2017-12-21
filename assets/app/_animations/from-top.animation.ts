
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromTop =
    trigger('fromTop', [
        // Enter from top
        state('fromTop', style({opacity: 1, transform: 'translateY(0)'})),

        transition('* => fromTop', [
        style({opacity: 0, transform: 'translateY(-5%)'}),
        animate('400ms ease-in-out')
        ]),
]);
