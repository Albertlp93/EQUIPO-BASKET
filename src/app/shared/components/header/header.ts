import { Component, Input } from '@angular/core';

/** Cabecera común: logo, nombre del equipo y subtítulo. */
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  @Input({ required: true }) teamName = '';
  @Input() subtitle = '';
}
