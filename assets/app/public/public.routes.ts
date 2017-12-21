import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './auth/auth.component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { AuthGuard } from '../_guards/auth.guard';

export const PUBLIC_ROUTES: Routes = [
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES, resolve: [AuthGuard] },
];

