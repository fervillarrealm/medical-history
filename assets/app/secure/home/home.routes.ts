import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './index'

export const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
]