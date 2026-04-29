import { Component, inject } from '@angular/core';
import { SolicitudList } from '../solicitud-list/solicitud-list';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mis-solicitudes',
  imports: [SolicitudList],
  templateUrl: './mis-solicitudes.html',
  styleUrl: './mis-solicitudes.css',
})
export class MisSolicitudes {
  location = inject(Location);
  
  volver(): void{
    this.location.back();
  }
}
