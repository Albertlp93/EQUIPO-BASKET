/** Posiciones posibles de un jugador en pista. */
export type Posicion = 'Base' | 'Escolta' | 'Alero' | 'Ala-Pívot' | 'Pívot';

/** Datos de un jugador del equipo. */
export interface Player {
  id: number;
  nombre: string;
  apellidos: string;
  posicion: Posicion;
  edad: number;
  altura: number; // en cm
  peso: number; // en kg
  dorsal: number;
  nacionalidad: string;
  puntosPorPartido: number;
  fotoUrl: string;
  videoUrl: string;
  infoUrl: string;
  biografia: string;
}
