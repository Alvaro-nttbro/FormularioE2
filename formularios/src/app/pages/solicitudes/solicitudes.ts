import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SolicitudForm } from '../solicitud-form/solicitud-form';

@Component({
  selector: 'app-solicitudes',
  imports: [RouterLink, SolicitudForm],
  templateUrl: './solicitudes.html',
  styleUrl: './solicitudes.css',
})
export class Solicitudes {
  private router = inject(Router);

  openForm = signal(false);

  logOut(){
    this.router.navigate(['/login']);
  }

  open(){
    this.openForm.set(true);
  }
}
