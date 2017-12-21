import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromTopOut =
    trigger('fromTopOut', [
        state('fromTopOut', style({opacity: 0, transform: 'translateY(5%)'})),

        transition('fromTop => fromTopOut', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('300ms ease-in-out')
        ]),
    ]);
