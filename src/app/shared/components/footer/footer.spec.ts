import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  it('pinta el nombre del equipo', async () => {
    await TestBed.configureTestingModule({ imports: [FooterComponent] }).compileComponents();
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.componentRef.setInput('teamName', 'PRUEBA');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('PRUEBA');
  });
});
