import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../shared/models/player.model';
import { AvatarComponent } from '../../shared/components/avatar/avatar';

/** Dato de la ficha: etiqueta y valor ya formateado. */
interface DatoFicha {
  etiqueta: string;
  valor: string;
}

/** Ficha completa del jugador seleccionado. */
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class DetailComponent {
  @Input() player: Player | null = null;
  @Output() closeDetail = new EventEmitter<void>();

  /** Datos que se muestran en las casillas de la ficha. */
  get datos(): DatoFicha[] {
    const p = this.player;
    if (!p) {
      return [];
    }
    return [
      { etiqueta: 'Edad', valor: `${p.edad} años` },
      { etiqueta: 'Altura', valor: `${(p.altura / 100).toFixed(2)} m` },
      { etiqueta: 'Dorsal', valor: `${p.dorsal}` },
      { etiqueta: 'Posición', valor: p.posicion },
      { etiqueta: 'Peso', valor: `${p.peso} kg` },
      { etiqueta: 'Nacionalidad', valor: p.nacionalidad },
      { etiqueta: 'Puntos', valor: p.puntosPorPartido.toFixed(1) },
    ];
  }

  cerrar(): void {
    this.closeDetail.emit();
  }
}
