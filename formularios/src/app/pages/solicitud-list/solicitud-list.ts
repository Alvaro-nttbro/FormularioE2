import { DatePipe, Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Header } from '../header/header';
import { Logger } from '../shared/logger';
import { SolicitudModel } from '../shared/solicitud-model';
import { SolicitudService } from '../shared/solicitud-service';

@Component({
  selector: 'app-solicitud-list',
  imports: [DatePipe, MatExpansionModule, Header],
  templateUrl: './solicitud-list.html',
  styleUrl: './solicitud-list.css',
})
export class SolicitudList {
  private logger = inject(Logger);
  private solicitudService = inject(SolicitudService);
  private location = inject(Location);

  solicitudes = signal<SolicitudModel[]>([]);
  loading = signal(false);
  error = signal('');

  tituloFiltro = signal('');
  prioridadFiltro = signal<number | null>(null);

  solicitudesFiltradas = computed(() => {
    const lista = this.solicitudes();
    const titulo = this.tituloFiltro().trim().toLowerCase();
    const prioridad = this.prioridadFiltro();

    return lista.filter((s) => {
      const coincideTitulo = !titulo || s.titulo.toLowerCase().includes(titulo);
      const coincidePrioridad = prioridad === null || s.prioridad === prioridad;

      return coincideTitulo && coincidePrioridad;
    });
  });

  ngOnInit() {
    this.loadSolicitudes();
  }

  async loadSolicitudes() {
    const email = this.logger.getEmail();

    if (!email) {
      this.error.set('No hay ningún email en sesión');
      return;
    }

    this.loading.set(true);
    this.error.set('');

    try {
      const data = await this.solicitudService.getAllByEmail(email);
      this.solicitudes.set(data);
    } catch (err) {
      this.error.set('No se pudieron cargar las solicitudes');
      console.error(err);
    } finally {
      this.loading.set(false);
    }
  }

  onTituloChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.tituloFiltro.set(value);
  }

  onPrioridadChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value === '') {
      this.prioridadFiltro.set(null);
      return;
    }

    this.prioridadFiltro.set(Number(value));
  }

  limpiarFiltros() {
    this.tituloFiltro.set('');
    this.prioridadFiltro.set(null);
  }

  volver() {
    this.location.back();
  }
}
