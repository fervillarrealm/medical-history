
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/http.service';
import 'rxjs/Rx';

 
@Injectable()
export class LoginService {
    constructor(private http: HttpService) { }
    
    validaUsuario(login: string, password: string){

        const body = JSON.stringify({"login": login, "password" : password});
    
        return this.http.post('validaUsuario', body)
            .map((res: Response)   => {
                let body = res.json();
                return body.data || {};
            })            
            .catch((error: Response)    => Observable.throw(error.json()));
    }

    userLoginInfo(username: string){

        const body = JSON.stringify({ 'username': username });

        return this.http.post('getUsuarioLogin', body)
        .map((res: Response) => {
            let body = res.json();
            return body.data || {};
        })
        .catch((error: Response)    => Observable.throw(error.json()));
    }

    isAuthenticated(){
        return true;
    }

    logout() {
        
        localStorage.removeItem('currentUser');
    }
}