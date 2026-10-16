import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';
import { Player } from './models/player.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayersComponent, DetailComponent, MediaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'EQUIPO BASKET';
  jugadorSeleccionado: Player | null = null;

  onPlayerSelected(player: Player): void {
    this.jugadorSeleccionado = player;
  }
}

// Para compatibilidad en caso de que algún archivo la llame AppComponent
export { App as AppComponent };