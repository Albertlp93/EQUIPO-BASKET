import { Component, Input } from '@angular/core';

/** Pie de página común. */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  @Input({ required: true }) teamName = '';
}
