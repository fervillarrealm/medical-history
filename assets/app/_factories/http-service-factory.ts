import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../core/angular-redux-request.options';
import { HttpService } from '../core/http.service';
import { LoaderService, AlertService, NotificationsService } from '../_directives';

function httpServiceFactory(
    backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService, alertService: AlertService, notifyService: NotificationsService, solicitudService: SolicitudService) {
    return new HttpService(backend, options, loaderService, alertService, notifyService);
}

export { httpServiceFactory };