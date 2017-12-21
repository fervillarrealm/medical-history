import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromBottom =
    trigger('fromBottom', [
        // Enter from bottom
        state('fromBottom', style({opacity: 1, transform: 'translateY(0)'})),
        transition('* => fromBottom', [
        style({opacity: 0, transform: 'translateY(5%)'}),
        animate('400ms ease-in-out')
        ]),
    ]);