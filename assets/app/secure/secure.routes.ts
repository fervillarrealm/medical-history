import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { SolicitudComponent } from './solicitud';

import { HOME_ROUTES } from './home';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, children: HOME_ROUTES },
];