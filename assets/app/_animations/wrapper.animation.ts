import { trigger, state, animate, transition, style } from '@angular/animations';

export const wrapper =
    trigger('wrapper', [
        state('void', style({opacity: 0, transform: 'scale(0.75, 0.75) translate(0, -100vh)'})),
        state('leave', style({opacity: 0, transform: 'scale(0.75, 0.75) translate(0, -100vh)'})),
        state('enter', style({opacity: 1, transform: 'scale(1, 1) translate(0, 0)'})),

        transition('void => enter', animate('450ms cubic-bezier(.5, 1.4, .5, 1)')),
        transition('enter => leave', animate('450ms cubic-bezier(.5, 1.4, .5, 1)'))
    ]);