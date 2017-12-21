import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromRightOut =
    trigger('fromRightOut', [
        state('fromRightOut', style({opacity: 0, transform: 'translateX(-5%)'})),

        transition('fromRight => fromRightOut', [
        style({opacity: 1, transform: 'translateX(0)'}),
        animate('300ms ease-in-out')
        ]),
    ]);