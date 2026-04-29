import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Logger } from '../shared/logger';
import { SolicitudService } from '../shared/solicitud-service';

@Component({
  selector: 'app-solicitud-form',
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud-form.html',
  styleUrl: './solicitud-form.css',
})
export class SolicitudForm {
  openForm = signal(false);

  private fb = inject(FormBuilder);
  private logger = inject(Logger);
  private solicitudService = inject(SolicitudService);

  solicitudForm: FormGroup = this.fb.group({
    'titulo': ['', Validators.required],
    'descripcion': ['', Validators.required],
    'categoria': ['', Validators.required],
    'prioridad': ['', Validators.required],
    'email': [this.logger.getEmail(), [Validators.required, Validators.email]],
  })

  onSubmit(){
    console.log((this.solicitudForm.invalid)
    if(this.solicitudForm.invalid){
      this.solicitudForm.markAllAsTouched();
      return;
    }

    const titulo = this.solicitudForm.value.titulo;
    const descripcion = this.solicitudForm.value.descripcion;
    const categoria = this.solicitudForm.value.categoria;
    const prioridad = this.solicitudForm.value.prioridad;
    const email = this.solicitudForm.value.email;

    //this.solicitudService.create();

    this.openForm.set(false);
  }
}
