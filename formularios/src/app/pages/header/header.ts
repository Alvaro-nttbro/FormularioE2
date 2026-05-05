import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from '../shared/logger';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);
  private logger = inject(Logger);

  logEmail = signal('');

  ngOnInit() {
    const e = this.logger.getEmail();
    if (e) {
      this.logEmail.set(e);
    }
  }

  logOut() {
    this.router.navigate(['/login']);
  }
}
