import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

/** Reproductor de vídeo con controles propios (play, pause, stop, progreso y volumen). */
@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class MediaComponent implements OnChanges {
  @Input() videoUrl = '';

  @ViewChild('video') videoRef?: ElementRef<HTMLVideoElement>;

  reproduciendo = false;
  tiempoActual = 0;
  duracion = 0;
  volumen = 0.8;
  silenciado = false;

  private get video(): HTMLVideoElement | undefined {
    return this.videoRef?.nativeElement;
  }

  /** Al cambiar de jugador se reinicia el estado del reproductor. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl'] && !changes['videoUrl'].firstChange) {
      this.reproduciendo = false;
      this.tiempoActual = 0;
      this.duracion = 0;
    }
  }

  // ---- Controles ----

  play(): void {
    this.video?.play();
  }

  pause(): void {
    this.video?.pause();
  }

  togglePlay(): void {
    if (this.reproduciendo) {
      this.pause();
    } else {
      this.play();
    }
  }

  stop(): void {
    if (!this.video) {
      return;
    }
    this.video.pause();
    this.video.currentTime = 0;
  }

  /** Barra de progreso: mueve el vídeo al segundo elegido. */
  seek(event: Event): void {
    if (!this.video) {
      return;
    }
    this.video.currentTime = Number((event.target as HTMLInputElement).value);
  }

  /** Barra de volumen: valor entre 0 y 1. */
  cambiarVolumen(event: Event): void {
    if (!this.video) {
      return;
    }
    this.volumen = Number((event.target as HTMLInputElement).value);
    this.video.volume = this.volumen;
    this.silenciado = this.volumen === 0;
    this.video.muted = this.silenciado;
  }

  toggleMute(): void {
    if (!this.video) {
      return;
    }
    this.silenciado = !this.silenciado;
    this.video.muted = this.silenciado;
  }

  // ---- Eventos del elemento <video> ----

  onLoadedMetadata(): void {
    if (!this.video) {
      return;
    }
    this.duracion = this.video.duration;
    this.video.volume = this.volumen;
    this.video.muted = this.silenciado;
  }

  onTimeUpdate(): void {
    this.tiempoActual = this.video?.currentTime ?? 0;
  }

  onPlay(): void {
    this.reproduciendo = true;
  }

  onPause(): void {
    this.reproduciendo = false;
  }
}
