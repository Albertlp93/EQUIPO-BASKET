import { Player, Posicion } from '../shared/models/player.model';

/** Posiciones disponibles para el filtro desplegable del listado. */
export const POSICIONES: Posicion[] = ['Base', 'Escolta', 'Alero', 'Ala-Pívot', 'Pívot'];

/** Datos de ejemplo de la plantilla. */
export const PLAYERS_DATA: Player[] = [
  {
    id: 1,
    nombre: 'Ricky',
    apellidos: 'Rubio',
    posicion: 'Base',
    edad: 34,
    altura: 190,
    peso: 86,
    dorsal: 9,
    nacionalidad: 'España',
    puntosPorPartido: 11.3,
    fotoUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    biografia:
      'Base veterano con gran visión de juego, capacidad de pase de élite y liderazgo en pista.',
  },
  {
    id: 2,
    nombre: 'Luka',
    apellidos: 'Doncic',
    posicion: 'Escolta',
    edad: 26,
    altura: 201,
    peso: 104,
    dorsal: 77,
    nacionalidad: 'Eslovenia',
    puntosPorPartido: 28.7,
    fotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=400&q=80',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    biografia:
      'Anotador implacable y generador ofensivo de primer nivel mundial con rango de tiro extendido.',
  },
  {
    id: 3,
    nombre: 'Rudy',
    apellidos: 'Fernández',
    posicion: 'Alero',
    edad: 39,
    altura: 196,
    peso: 84,
    dorsal: 5,
    nacionalidad: 'España',
    puntosPorPartido: 9.8,
    fotoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    biografia:
      'Especialista defensivo en robos y líneas de pase, letal en tiros decisivos desde el perímetro.',
  },
  {
    id: 4,
    nombre: 'Pau',
    apellidos: 'Gasol',
    posicion: 'Ala-Pívot',
    edad: 42,
    altura: 215,
    peso: 113,
    dorsal: 16,
    nacionalidad: 'España',
    puntosPorPartido: 17.0,
    fotoUrl: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    biografia:
      'Dominio absoluto de la pintura, ganchos imparables y excelente lectura táctica del juego interior.',
  },
  {
    id: 5,
    nombre: 'Marc',
    apellidos: 'Gasol',
    posicion: 'Pívot',
    edad: 40,
    altura: 211,
    peso: 116,
    dorsal: 33,
    nacionalidad: 'España',
    puntosPorPartido: 14.5,
    fotoUrl: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=400&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    biografia:
      'Pívot pasador con capacidad para defender a gigantes rivales y abrir la pista con tiro exterior.',
  },
];
