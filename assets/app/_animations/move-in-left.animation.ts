import { trigger, state, animate, transition, style } from '@angular/animations';

export const moveInLeft =

    trigger('moveInLeft', [

      transition(':enter', [
          
        style({opacity:'0', transform: 'translateX(-100px)'}),
        animate('.6s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
      ])
    ]);
  