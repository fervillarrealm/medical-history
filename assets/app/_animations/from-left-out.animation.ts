import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromLeftOut =
    trigger('fromLeftOut', [
        state('fromLeftOut', style({opacity: 0, transform: 'translateX(5%)'})),

        transition('fromLeft => fromLeftOut', [
        style({opacity: 1, transform: 'translateX(0)'}),
        animate('300ms ease-in-out')
        ]),
    ]);
