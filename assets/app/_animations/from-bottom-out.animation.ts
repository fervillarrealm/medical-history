import { trigger, state, animate, transition, style } from '@angular/animations';

export const fromBottomOut =
    trigger('fromBottomOut', [
        state('fromBottomOut', style({opacity: 0, transform: 'translateY(-5%)'})),

        transition('fromBottom => fromBottomOut', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('300ms ease-in-out')
        ]),
    ]);