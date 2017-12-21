import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { appConfig } from '../app.config';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Http, RequestOptions, RequestOptionsArgs, RequestMethod, Response, Request, Headers, XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { LoaderService, AlertService, NotificationsService } from '../_directives/index';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService extends Http {

    constructor(
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        private loaderService: LoaderService,
        private alertService: AlertService,
        private notificationService: NotificationsService
    ) { 
        super(backend, defaultOptions);
    }


    get(url: string, options?: RequestOptionsArgs): Observable<any> {

        this.showLoader();
        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        
        this.showLoader();
        return super.post(this.getFullUrl(url), body,  this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                let errorMsg = error.json();
                //this.showAlert(2, errorMsg['message']);
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        
        this.showLoader();
        return super.put(this.getFullUrl(url), body,  this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        
        this.showLoader();
        return super.delete(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }
    
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        
        if (options == null) {
            options = new AngularReduxRequestOptions();
        }        

        if (options.headers == null) {
            options.headers = new Headers({ 'Content-Type': 'application/json' });
        }

        return options;
    }
 
    private getFullUrl(url: string): string {
        console.log(appConfig.apiUrl + url);
        return appConfig.apiUrl + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        if (error.status === 401) {    
            //this.router.navigate(['/auth/login']);
            return Observable.empty();
        }

        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('onSuccess');
    }

    private onError(error: Response): void {        
        console.log("onError");
        let errMsg = error.json();

        if (error.status === 500) {
            this.alertService.create('error', errMsg['message'], "Error!");
        }else {
            this.notificationService.error('Error', errMsg['message']);
        }
        console.log('Error, status code: ' + error.status);
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}