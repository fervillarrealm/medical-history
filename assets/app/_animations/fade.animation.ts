import { trigger, state, animate, transition, style } from '@angular/animations';

export const fade =
    trigger('fade', [
        state('fade', style({opacity: 1})),

        transition('* => fade', [
            style({opacity: 0}),
            animate('300ms ease-in-out')
        ]),
]);
  