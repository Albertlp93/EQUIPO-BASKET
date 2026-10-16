import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';
import { PLAYERS_DATA } from '../../data/players.mock';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class PlayersComponent {
  players: Player[] = PLAYERS_DATA;

  @Input() selectedPlayer: Player | null = null;
  @Output() playerSelected = new EventEmitter<Player>();

  onSelectPlayer(player: Player): void {
    this.selectedPlayer = player;
    this.playerSelected.emit(player);
  }
}