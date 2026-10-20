import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('teamName', 'PRUEBA');
    fixture.componentRef.setInput('subtitle', 'Temporada de prueba');
    await fixture.whenStable();
  });

  it('pinta el nombre y el subtítulo recibidos', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('PRUEBA');
    expect(el.textContent).toContain('Temporada de prueba');
  });
});
