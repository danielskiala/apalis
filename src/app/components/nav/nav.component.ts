import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  open_nav: boolean;

  openNav() {
    this.open_nav = !this.open_nav;
  }
}
