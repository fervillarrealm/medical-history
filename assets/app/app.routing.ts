import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './layout/public'
import { SecureComponent } from './layout/secure';

import { AuthGuard } from './_guards/auth.guard';
import { SECURE_ROUTES } from './secure/secure.routes';
import { PUBLIC_ROUTES } from './public/public.routes';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
    { path: '**', redirectTo: '/auth/login' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
