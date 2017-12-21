
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOut =
    trigger('fadeOut', [
        state('fadeOut', style({opacity: 0})),
    
        transition('fade => fadeOut', [
        style({opacity: 1}),
        animate('300ms ease-in-out')
        ]),
]);
