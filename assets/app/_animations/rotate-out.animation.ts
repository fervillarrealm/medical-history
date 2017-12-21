import { trigger, state, animate, transition, style } from '@angular/animations';

export const rotateOut =
    trigger('rotateOut', [
        state('rotateOut', style({opacity: 0, transform: 'rotate(-5deg)'})),
        
        transition('rotate => rotateOut', [
        style({opacity: 1, transform: 'rotate(0deg)'}),
        animate('400ms ease-in-out')
        ])
    ]);