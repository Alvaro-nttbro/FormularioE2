import { JsonPipe } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Logger } from '../shared/logger';
import { SolicitudService } from '../shared/solicitud-service';

@Component({
  selector: 'app-solicitud-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './solicitud-form.html',
  styleUrl: './solicitud-form.css',
})
export class SolicitudForm {
  private fb = inject(FormBuilder);
  private logger = inject(Logger);
  private solicitudService = inject(SolicitudService);

  closeModal = output<string>();
  submitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  solicitudForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    descripcion: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    categoria: [''],
    prioridad: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    email: [this.logger.getEmail(), [Validators.required, Validators.email]],
  });

  async onSubmit() {
    if (this.submitting()) {
      return;
    }

    if (this.solicitudForm.invalid) {
      this.solicitudForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    const load = {
      titulo: this.solicitudForm.value.titulo,
      descripcion: this.solicitudForm.value.descripcion,
      categoria: this.solicitudForm.value.categoria,
      prioridad: this.solicitudForm.value.prioridad,
      email: this.solicitudForm.value.email,
    };

    try {
      await this.solicitudService.create(load);
      this.successMessage.set('Solicitud enviada correctamente');
      this.closeModal.emit('Solicitud enviada correctamente');
    } catch (error: any) {
      if (error?.message?.includes('Failed to fetch')) {
        this.errorMessage.set('Error de red. Revisa tu conexión e inténtalo de nuevo.');
      } else if (error?.code === '42501') {
        this.errorMessage.set('No tienes permisos para crear solicitudes.');
      } else {
        this.errorMessage.set('No se pudo enviar la solicitud. Inténtalo de nuevo.');
      }
    } finally {
      this.submitting.set(false);
    }
  }

  cancel() {
    if (this.submitting()) {
      return;
    }

    this.closeModal.emit('');
  }
}
