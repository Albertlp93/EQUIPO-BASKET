export interface Player {
  id: number;
  nombre: string;
  apellidos: string;
  posicion: string; // Base, Escolta, Alero, Ala-Pívot, Pívot
  edad: number;
  altura: number; // en cm
  dorsal: number;
  puntosPorPartido: number;
  fotoUrl: string;
  videoUrl: string;
  biografia: string;
}