import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TEAM_NAME } from './data/team.config';
import { PLAYERS_DATA } from './data/players.mock';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('crea la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra el nombre del equipo en la cabecera', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(TEAM_NAME);
  });

  it('cerrar el detalle deja la lista sin jugador seleccionado', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.onPlayerSelected(PLAYERS_DATA[0]);
    expect(app.jugadorSeleccionado).toBe(PLAYERS_DATA[0]);
    app.onCloseDetail();
    expect(app.jugadorSeleccionado).toBeNull();
  });
});
