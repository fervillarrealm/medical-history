import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from './material.module';

import { HttpService } from './http.service';
import { httpServiceFactory } from './../_factories/http-service-factory';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { LoaderComponent, LoaderService, 
    AlertComponent, AlertService, AlertsComponent, NotificationsComponent, 
    NotificationComponent, NotificationsService } from '../_directives/index';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        LoaderComponent,
        AlertComponent,
        NotificationComponent,
        NotificationsComponent,
        AlertsComponent
    ],
    declarations: [
        LoaderComponent,
        AlertComponent,
        NotificationComponent,
        NotificationsComponent,
        AlertsComponent
    ],
    providers: [
        LoaderService,
        AlertService,
        NotificationsService,
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService, AlertService, NotificationsService ]
        }
    ]
})

export class CoreModule { }