import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="videoUrl" class="p-3 border rounded bg-white shadow-sm mt-3">
      <h5>Reproductor de prueba</h5>
      <video [src]="videoUrl" controls width="100%" class="rounded"></video>
    </div>
  `
})
export class MediaComponent {
  @Input() videoUrl: string = '';
}