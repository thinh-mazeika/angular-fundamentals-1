import { Component, Output, EventEmitter } from '@angular/core';

import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <!-- add output binding and invoke the onSelect() method -->
    <app-donut-wall (selected)="onSelected($event)"></app-donut-wall>
    <!-- add output binding and invoke the onRemove() method -->
    <app-box-of-donuts
      [donuts]="donuts"
      [size]="6"
      (remove)="onRemove($event)"
    ></app-box-of-donuts>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  donuts: Donut[] = [];

  // declare onRemove method that accepts a donut and removes it from the array of selected donuts

  // declare onSelect method that accepts a donut and appends it to the array of selected donuts
  onSelected(donut: Donut) {
    console.log(donut);
  }

  onRemove(donut: Donut) {
    console.log('donut removed', donut);
  }
}
