import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts size="2"></app-box-of-donuts>
    <div *ngFor="let num of numbersArray">
      <p *ngIf="num % 2 == 0">
        <strong>{{ num }}</strong>
      </p>
    </div>
    <!-- Use the NgFor Directive to iterate over the array of numbers.
      Bold the number if it is even. -->
  `,
})
export class AppComponent {
  // Define an array of numbers
  numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
}
