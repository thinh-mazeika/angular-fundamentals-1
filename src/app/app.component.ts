import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts
      style="border: 1px solid #000;"
      [size]="12"
    ></app-box-of-donuts>
  `,
})
export class AppComponent {}
