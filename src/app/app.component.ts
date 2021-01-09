import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-donut-wall
      (edit)="onEdit($event)"
      (select)="onSelect($event)"
    ></app-donut-wall>
    <app-box-of-donuts
      [donuts]="donuts"
      [name]="name"
      [size]="6"
      (remove)="onRemove($event)"
    ></app-box-of-donuts>

    <div class="customer-form">
      <h2>Customer</h2>
      <input [(ngModel)]="name" />
    </div>

    <div class="donut-form" *ngIf="donut">
      <h2>Donut Kitchen</h2>
      <!-- Use reactive forms instead of template-driven forms -->
      <form [formGroup]="donutForm" (ngSubmit)="onSubmit(donutForm)">
        <input formControlName="name" />
        <input formControlName="price" />
        <button>Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  /** The donut that is in the kitched (edited). */
  donut: Donut;

  // declare donutForm FormGroup instance
  donutForm: FormGroup;

  /** The customer's name. */
  name: string;

  // declare constructor function that requires the FormBuilder instance
  constructor(private fb: FormBuilder) {}
  // declare the donutForm using the FormBuilder.group instance method
  ngOnInit() {
    this.donutForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.5)]],
    });
  }

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

  onEdit(donut: Donut) {
    this.donutForm.patchValue(donut);
    this.donut = donut;
  }

  // remove form argument and reference donutForm FormGroup instance
  onSubmit(): void {
    console.log(this.donutForm.value);
    console.log(this.donutForm.valid);
  }
}
