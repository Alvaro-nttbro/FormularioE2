import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Solicitudes } from './pages/solicitudes/solicitudes';
import { SolicitudList } from './pages/solicitud-list/solicitud-list';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'solicitudes', component: Solicitudes },
    { path: 'misSolicitudes', component: SolicitudList },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
