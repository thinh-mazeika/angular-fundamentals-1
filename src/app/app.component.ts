import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-donut-wall
      (select)="onSelect($event)"
      (edit)="donutBeingEdited = $event"
    ></app-donut-wall>

    <app-box-of-donuts
      [donuts]="donuts"
      [size]="6"
      (remove)="onRemove($event)"
      [name]="customerName"
    ></app-box-of-donuts>

    <div class="customer-form">
      <input
        [(ngModel)]="customerName"
        placeholder="Enter your name"
        required
      />
    </div>

    <div class="donut-form" *ngIf="donutBeingEdited">
      <h2>Donut Kitchen</h2>
      <form #donutForm="ngForm" (ngSubmit)="onSubmit(donutForm)">
        <input name="name" [(ngModel)]="donutBeingEdited.name" required />
        <input name="price" [(ngModel)]="donutBeingEdited.price" required />
        <p>Valid? {{ donutForm.valid }}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  donuts: Donut[] = [];

  donutBeingEdited: Donut;

  customerName: string;

  onRemove(donut: Donut): void {
    const index = this.donuts.findIndex((d) => d.name === donut.name);
    if (index === -1) {
      return;
    }

    this.donuts.splice(index, 1);
  }

  onSelect(donut: Donut): void {
    this.donuts = [...this.donuts, donut];
  }

  onSubmit(form: NgForm) {
    console.log('Form valid', form.valid);
    console.log(form.value);
  }
}
