import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <p>Size: {{ size }}</p>
    <app-donut
      [donut]="currentDonut"
      style="display: inline-block;"
    ></app-donut>
  `,
})
export class BoxOfDonutsComponent {
  currentDonut: Donut = { name: 'Bacon glazed' };
  @Input() size: number;
}
