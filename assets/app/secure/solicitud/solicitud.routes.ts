import { Routes, RouterModule } from '@angular/router';

import { CapturarSolicitudComponent } from './capturar-solicitud/capturar-solicitud.component';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';

export const SOLICITUD_ROUTES: Routes = [
    { path: '', redirectTo: '../home/inicio', pathMatch: 'full' },
    { path: 'capturar-solicitud', component: CapturarSolicitudComponent },
    { path: 'consultar-solicitudes', component: ConsultarSolicitudesComponent },
]