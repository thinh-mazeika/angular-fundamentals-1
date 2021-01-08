import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name" [ngStyle]="{ 'font-weight': isBold(donut.name) }">
      <span [hidden]="!showName">{{ donut.name }}</span>
      <span
        *ngIf="donut.icing"
        [hidden]="donut.fileName && donut.fileName.length > 0"
        >(icing)</span
      >
    </div>
    <img
      *ngIf="donut.fileName && donut.fileName.length > 0"
      [alt]="donut.name"
      [src]="donut.fileName"
      [style.width.%]="donut.name.length"
    />
  `,
  styles: [
    `
      .heading {
        padding: 10px;
      }
    `,
  ],
})
export class DonutComponent {
  @Input() donut: Donut;
  @Input() showName: boolean;

  isBold(name: string): string {
    return /chocolate/i.test(name) ? 'bold' : 'normal';
  }
}
