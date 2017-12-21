import { BaseRequestOptions } from '@angular/http';

export class AngularReduxRequestOptions extends BaseRequestOptions {

    public token: string;

    constructor (angularReduxOptions?: any) {

        super();
        
        let user = JSON.parse(localStorage.getItem('currentUser'));
        
        this.headers.append('Content-Type', 'application/json');
        
        if (user && user.token) {
            this.headers.append('Authorization', 'Bearer ' + user.token);
        }

        if (angularReduxOptions != null) {

            for (let option in angularReduxOptions) {
                let optionValue = angularReduxOptions[option];
                this[option] = optionValue;
            }
        }
    }

    
}