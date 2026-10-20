import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player.model';

/**
 * Filtra la lista de jugadores por dos parámetros:
 *  - texto: busca en nombre y apellidos (sin distinguir mayúsculas ni tildes).
 *  - posicion: posición elegida en el desplegable ('' = todas).
 *
 * Uso: *ngFor="let p of players | playerFilter: texto : posicion"
 */
@Pipe({
  name: 'playerFilter',
  standalone: true,
})
export class PlayerFilterPipe implements PipeTransform {
  transform(players: Player[] | null, texto = '', posicion = ''): Player[] {
    if (!players) {
      return [];
    }

    const busqueda = this.normalizar(texto);

    return players.filter((player) => {
      const nombreCompleto = this.normalizar(`${player.nombre} ${player.apellidos}`);
      const coincideTexto = !busqueda || nombreCompleto.includes(busqueda);
      const coincidePosicion = !posicion || player.posicion === posicion;
      return coincideTexto && coincidePosicion;
    });
  }

  /** Pasa a minúsculas y quita tildes para comparar textos. */
  private normalizar(valor: string): string {
    return valor
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .trim();
  }
}
