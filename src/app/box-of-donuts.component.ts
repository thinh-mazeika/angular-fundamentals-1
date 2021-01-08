import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <div class="heading">
      <span *ngIf="size < 5">Small</span><span *ngIf="size > 7">Large</span> Box
      <p *ngIf="isFull()">Box full</p>
    </div>
    <div class="donuts">
      <!-- Add click event handler to set the selectedDonut -->
      <!-- Add the 'selected' class to the app-donut component when it is the currently selected donut -->
      <app-donut
        *ngFor="let donut of donuts"
        [donut]="donut"
        [showName]="showName"
        (click)="selectedDonut = donut"
        [ngClass]="{ selected: donut === selectedDonut }"
      ></app-donut>
    </div>
    <button (click)="showName = !showName"></button>
  `,
  styles: [
    `
      :host {
        width: 100%;
        border: 4px solid #e91e63;
      }
      .selected {
        background: #efefef;
      }

      .heading {
        background-color: #f8bbd0;
        padding: 10px;
      }

      .donuts {
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class BoxOfDonutsComponent {
  selectedDonut: Donut;
  donuts: Donut[] = [
    {
      name: 'Chocolate Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut1.png',
    },
    {
      name: 'Strawberry Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut2.png',
    },
    {
      name: 'Chocolate Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut3.png',
    },
    {
      name: 'Cherry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut4.png',
    },
    {
      name: 'Strawberry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut5.png',
    },
    {
      name: 'Vanilla Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut6.png',
    },
    {
      name: 'Cherry Coated',
      icing: true,
      fileName: 'assets/img/donuts/donut7.png',
    },
  ];

  @Input() size = 6;

  showName = true;

  isFull(): boolean {
    return this.donuts.length === this.size;
  }
}
