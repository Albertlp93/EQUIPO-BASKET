import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players';
import { PLAYERS_DATA } from '../../data/players.mock';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('pinta todos los jugadores del mock', () => {
    const items = (fixture.nativeElement as HTMLElement).querySelectorAll('.eb-jugador');
    expect(items.length).toBe(PLAYERS_DATA.length);
  });

  it('emite el jugador al hacer clic', () => {
    let emitido = null;
    component.playerSelected.subscribe((p) => (emitido = p));
    (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.eb-jugador')?.click();
    expect(emitido).toBe(PLAYERS_DATA[0]);
  });

  it('marca como activo el jugador seleccionado', async () => {
    fixture.componentRef.setInput('selectedPlayer', PLAYERS_DATA[1]);
    await fixture.whenStable();
    const activos = (fixture.nativeElement as HTMLElement).querySelectorAll('.eb-jugador--activo');
    expect(activos.length).toBe(1);
    expect(activos[0].textContent).toContain(PLAYERS_DATA[1].nombre);
  });
});
