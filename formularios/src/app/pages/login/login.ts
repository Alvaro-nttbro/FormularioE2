import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Logger } from '../shared/logger';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private logger = inject(Logger);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email;

    this.logger.setEmail(email);

    this.router.navigate(['/solicitudes']);
  }
}
