import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <p *ngIf="size <= 4">Small box</p>
    <p *ngIf="size >= 8">Large box</p>
    <p *ngIf="size > 4 && size < 8">Box</p>
    <p>Size: {{ size }}</p>
    <p>Donuts box: {{ donuts.length }}</p>
    <p *ngIf="size == donuts.length">Box is Full</p>
    <div *ngFor="let donut of donuts">
      <p>{{ donut | json }}</p>
    </div>

    <app-donut [donut]="donuts[0]"></app-donut>
  `,
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    { name: 'Bacon glazed', icing: true },
    { name: 'Sirachi Infused', icing: false },
  ];

  @Input() size = 6;
}
