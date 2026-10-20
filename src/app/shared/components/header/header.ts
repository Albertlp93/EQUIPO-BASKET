import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

/** Cabecera común: logo, nombre del equipo y subtítulo. */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  @Input({ required: true }) teamName = '';
  @Input() subtitle = '';
}
