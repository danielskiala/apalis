import { Component, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  router = inject(Router);
  gotoContact() {
    this.router.navigate(['/contact']);
  }
}
