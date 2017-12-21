import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FooterSecureComponent } from './footer/footer.component';
import { NavbarSecureComponent } from './navbar/navbar.component';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { NotificationsService } from '../../_directives/notification/notification.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',  
  styleUrls: ['./secure.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ NotificationsService ]
})
export class SecureComponent {
  timedOut = false;
  lastPing?: Date = null;
  returnUrl: string;
  options = {
    timeOut: 10000
  }

  constructor(
    private idle: Idle, 
    private keepalive: Keepalive,
    private router: Router,
    private notificationService: NotificationsService ) { 
    
    idle.setIdle(150);
    idle.setTimeout(10);    
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.notificationService.remove();
    });

    idle.onTimeout.subscribe(() => {
      this.timedOut = true;
      localStorage.clear();
      this.router.navigate(['/auth/login', { returnUrl: this.returnUrl }]);
    });

    idle.onIdleStart.subscribe(() => { 
      this.notificationService.alert("Alerta!", "Tu sesión se cerrará en 10 segundos!", this.options);
      this.returnUrl = this.router.url.toString();
    });

    idle.onTimeoutWarning.subscribe((countdown) =>  {
      console.log('¡Tu sesión se cerrará en ' + countdown + ' segundos!');
    });

    keepalive.interval(15);
    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

}