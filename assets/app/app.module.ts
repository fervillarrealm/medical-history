import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';

import { httpServiceFactory } from './_factories/http-service-factory';
import { CoreModule, MaterialModule, HttpService } from './core';
import { routing } from "./app.routing";
import { Uppercase } from './_directives/helpers/uppercase.directive';

import { AppComponent } from './app.component';

//  Layout - Secure
import { SecureComponent, NavbarSecureComponent, ToolbarSecureComponent, FooterSecureComponent } from './layout/secure';

//  Children - Secure


//  Layout - Public
import { PublicComponent, HeaderPublicComponent } from './layout/public';

//  Children - Public
import { AuthenticationComponent, LoginComponent, ChangePasswordComponent } from './public/auth';

//  Common
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent, 
        
        PublicComponent,
        HeaderPublicComponent,

        SecureComponent,
        NavbarSecureComponent,
        ToolbarSecureComponent,
        FooterSecureComponent,

        AuthenticationComponent,
        LoginComponent,
        ChangePasswordComponent,        
        Uppercase
        
    ],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule,
        CoreModule,
        MaterialModule,
        MomentModule,
        NgIdleKeepaliveModule.forRoot(),
        TextMaskModule
    ],
    providers: [
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}