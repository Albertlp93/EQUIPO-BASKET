import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail';
import { PLAYERS_DATA } from '../../data/players.mock';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('player', PLAYERS_DATA[0]);
    await fixture.whenStable();
  });

  it('muestra los datos del jugador', () => {
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(texto).toContain(PLAYERS_DATA[0].nombre);
    expect(texto).toContain(PLAYERS_DATA[0].nacionalidad);
  });

  it('emite closeDetail al pulsar cerrar', () => {
    let cerrado = false;
    component.closeDetail.subscribe(() => (cerrado = true));
    (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.btn-close')?.click();
    expect(cerrado).toBe(true);
  });
});
