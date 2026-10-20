import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar';

describe('AvatarComponent', () => {
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AvatarComponent] }).compileComponents();
    fixture = TestBed.createComponent(AvatarComponent);
    fixture.componentRef.setInput('src', 'assets/image/prueba.jpg');
    fixture.componentRef.setInput('alt', 'Stephen Curry');
    await fixture.whenStable();
  });

  it('muestra la imagen', () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.getAttribute('src')).toBe('assets/image/prueba.jpg');
  });

  it('muestra las iniciales si la imagen falla', async () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    img?.dispatchEvent(new Event('error'));
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('img')).toBeNull();
    expect(el.textContent).toContain('SC');
  });
});
