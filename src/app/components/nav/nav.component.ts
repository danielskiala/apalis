import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() contact_page: boolean;
  open_nav: boolean;
  fuel_express = input<boolean>(false);
  openNav() {
    this.open_nav = !this.open_nav;
  }
}
