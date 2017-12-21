import { trigger, state, animate, transition, style } from '@angular/animations';

export const scale =
    trigger('scale', [
        // Rotate
        state('scale', style({opacity: 1, transform: 'scale(1)'})),

        transition('* => scale', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('400ms ease-in-out')
        ]),
    ]);
