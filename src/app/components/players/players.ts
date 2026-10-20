import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player, Posicion } from '../../shared/models/player.model';
import { PLAYERS_DATA, POSICIONES } from '../../data/players.mock';
import { PlayerFilterPipe } from '../../shared/pipes/player-filter.pipe';
import { AvatarComponent } from '../../shared/components/avatar/avatar';

/** Listado de jugadores con buscador y filtro por posición. */
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayerFilterPipe, AvatarComponent],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class PlayersComponent {
  /** Datos importados del fichero de mock. */
  players: Player[] = PLAYERS_DATA;
  posiciones: Posicion[] = POSICIONES;

  /** Parámetros del pipe de filtrado. */
  texto = '';
  posicion = '';

  /** Jugador seleccionado (lo controla el componente padre). */
  @Input() selectedPlayer: Player | null = null;
  @Output() playerSelected = new EventEmitter<Player>();

  onSelectPlayer(player: Player): void {
    this.playerSelected.emit(player);
  }

  limpiarFiltros(): void {
    this.texto = '';
    this.posicion = '';
  }

  trackById(_index: number, player: Player): number {
    return player.id;
  }
}
