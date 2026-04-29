import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  sessionEmail = signal<string | null>(null);

  getEmail(){
    return this.sessionEmail();
  }

  setEmail(email: string){
    this.sessionEmail.set(email);
  }
}
