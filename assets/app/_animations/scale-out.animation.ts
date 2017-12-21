import { trigger, state, animate, transition, style } from '@angular/animations';

export const scaleOut =
    trigger('scaleOut', [
        state('scaleOut', style({opacity: 0, transform: 'scale(0)'})),

        transition('scale => scaleOut', [
        style({opacity: 1, transform: 'scale(1)'}),
        animate('400ms ease-in-out')
        ]),
    ]);
