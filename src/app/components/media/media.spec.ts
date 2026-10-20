import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media';

describe('MediaComponent', () => {
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    fixture.componentRef.setInput('videoUrl', 'assets/videos/prueba.mp4');
    await fixture.whenStable();
  });

  it('renderiza el vídeo y los controles', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('video')).toBeTruthy();
    expect(el.querySelectorAll('input[type="range"]').length).toBe(2);
  });
});
