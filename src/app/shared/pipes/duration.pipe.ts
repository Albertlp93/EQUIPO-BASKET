import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convierte una cantidad de segundos al formato m:ss.
 *
 * Uso: {{ tiempoActual | duration }}  →  1:15
 */
@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(segundos: number | null | undefined): string {
    if (segundos == null || !Number.isFinite(segundos) || segundos < 0) {
      return '0:00';
    }
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg.toString().padStart(2, '0')}`;
  }
}
