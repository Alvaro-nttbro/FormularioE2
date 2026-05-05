import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { SolicitudForm } from '../solicitud-form/solicitud-form';

@Component({
  selector: 'app-solicitudes',
  imports: [RouterLink, SolicitudForm, Header],
  templateUrl: './solicitudes.html',
  styleUrl: './solicitudes.css',
})
export class Solicitudes {
  openForm = signal(false);
  successMessage = signal('');

  open() {
    this.openForm.set(true);
  }

  close(menssage: string) {
    this.openForm.set(false);
    this.successMessage.set(menssage);
  }
}
