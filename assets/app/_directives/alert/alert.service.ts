import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AlertSettings, AlertType, AlertEmit } from './alert.interface';

@Injectable()
export class AlertService {
  alert$: Subject<AlertEmit> = new Subject();

  create(
    type: AlertType = 'success',
    message: any = '',
    title: any = '',
    override: AlertSettings = {}
  ) {
    this.alert$.next({type, title, message, override});
  }
}