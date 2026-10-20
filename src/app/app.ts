import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';
import { Player } from './shared/models/player.model';
import { TEAM_NAME, TEAM_SUBTITLE } from './data/team.config';

/** Componente raíz: guarda el jugador seleccionado y conecta lista, detalle y reproductor. */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PlayersComponent,
    DetailComponent,
    MediaComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly teamName = TEAM_NAME;
  readonly teamSubtitle = TEAM_SUBTITLE;
  jugadorSeleccionado: Player | null = null;

  constructor() {
    inject(Title).setTitle(this.teamName);
  }

  onPlayerSelected(player: Player): void {
    this.jugadorSeleccionado = player;
  }

  onCloseDetail(): void {
    this.jugadorSeleccionado = null;
  }
}
