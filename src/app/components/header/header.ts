import { Component, Input } from '@angular/core';

/** Cabecera con el nombre del equipo. */
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  @Input({ required: true }) teamName = '';
}
