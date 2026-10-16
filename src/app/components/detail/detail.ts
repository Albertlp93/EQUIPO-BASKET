import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="player" class="p-3 border rounded bg-white shadow-sm mt-3">
      <h4>Detalle: {{ player.nombre }} {{ player.apellidos }}</h4>
      <p>Dorsal: #{{ player.dorsal }} | Posición: {{ player.posicion }}</p>
      <button class="btn btn-sm btn-outline-danger" (click)="closeDetail.emit()">Cerrar</button>
    </div>
  `
})
export class DetailComponent {
  @Input() player: Player | null = null;
  @Output() closeDetail = new EventEmitter<void>();
}