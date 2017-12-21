import { Component, HostBinding, Output, EventEmitter, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { overlay, wrapper, symbol, message, short, rotate, rotateOut } from '../../_animations';
import { AlertType } from './alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [ overlay, wrapper, symbol, message, short, rotate, rotateOut ]
})
export class AlertComponent implements OnInit {
  constructor(
    private _ngZone: NgZone
  ) {}

  @Output() close = new EventEmitter();
  @HostBinding('class') type: AlertType;

  animationState = 'enter';
  incomingData: any = {
    title: '',
    titleIsTemplate: false,
    message: '',
    messageIsTemplate: false,
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 0
  };

  ngOnInit() {
    if (this.incomingData.duration) {
      this._ngZone.runOutsideAngular(() =>
        setTimeout(() =>
            this._ngZone.run(() =>
              this.closeSelf()
            ),
          this.incomingData.duration
        )
      );
    }
  }

  closeSelf() {
    this.animationState = 'leave';
    this.close.emit({close: true, ...this.incomingData});
  }

  overlayClick() {
    if (!this.incomingData.overlayClickToClose) {
      return;
    }

    this.closeSelf();
  }
}