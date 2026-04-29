import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Solicitudes } from './pages/solicitudes/solicitudes';
import { MisSolicitudes } from './pages/mis-solicitudes/mis-solicitudes';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'solicitudes', component: Solicitudes },
    { path: 'misSolicitudes', component: MisSolicitudes },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
