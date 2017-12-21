import { trigger, state, animate, transition, style } from '@angular/animations';

export const rotate =
    trigger('rotate', [
        // Scale
        state('rotate', style({opacity: 1, transform: 'rotate(0deg)'})),

        transition('* => rotate', [
        style({opacity: 0, transform: 'rotate(5deg)'}),
        animate('400ms ease-in-out')
        ]),
    ]);