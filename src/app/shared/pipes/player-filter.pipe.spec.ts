import { PlayerFilterPipe } from './player-filter.pipe';
import { PLAYERS_DATA } from '../../data/players.mock';

describe('PlayerFilterPipe', () => {
  const pipe = new PlayerFilterPipe();

  it('sin filtros devuelve todos', () => {
    expect(pipe.transform(PLAYERS_DATA).length).toBe(PLAYERS_DATA.length);
  });

  it('filtra por texto sin tildes ni mayúsculas', () => {
    const res = pipe.transform(PLAYERS_DATA, 'JOKIC');
    expect(res.map((p) => p.apellidos)).toEqual(['Jokić']);
  });

  it('filtra por posición', () => {
    const res = pipe.transform(PLAYERS_DATA, '', 'Pívot');
    expect(res.every((p) => p.posicion === 'Pívot')).toBe(true);
  });

  it('combina texto y posición', () => {
    expect(pipe.transform(PLAYERS_DATA, 'nikola', 'Pívot').length).toBe(1);
    expect(pipe.transform(PLAYERS_DATA, 'nikola', 'Base').length).toBe(0);
  });
});
