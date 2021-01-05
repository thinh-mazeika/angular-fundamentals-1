import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name" *ngIf="donut.fileName">
      <img [src]="donut?.fileName" [alt]="donut.name" />

      {{ donut.name }} <span *ngIf="!donut.fileName">(icing)</span>
    </div>
  `,
})
export class DonutComponent {
  @Input() donut: Donut;
}
