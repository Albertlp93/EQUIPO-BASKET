import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Foto circular de una persona.
 * Si la imagen no carga, muestra las iniciales del texto alternativo.
 */
@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class AvatarComponent implements OnChanges {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = '';
  /** Tamaño del círculo. */
  @Input() size: 'md' | 'lg' = 'md';
  /** Borde naranja (por ejemplo, jugador seleccionado). */
  @Input() acento = false;

  imagenRota = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.imagenRota = false;
    }
  }

  get iniciales(): string {
    return this.alt
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((parte) => parte[0].toUpperCase())
      .join('');
  }
}
