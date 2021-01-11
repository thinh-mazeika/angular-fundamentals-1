import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import data from '../data/donuts.json';
import { Donut } from '../models/donut.interface';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  donuts: Donut[];
  value = window.localStorage.getItem(environment.storage.donuts);
  constructor() {}
  populate() {
    if (!this.value) {
      window.localStorage.setItem(
        environment.storage.donuts,
        JSON.stringify(data)
      );
    }
  }
  getAll() {
    return JSON.parse(window.localStorage.getItem(environment.storage.donuts));
  }

  save(donut: Donut) {
    const index = this.donuts.findIndex((d) => d.id === donut.id);
    this.donuts[index] = donut;
    return window.localStorage.setItem(
      environment.storage.donuts,
      JSON.stringify(this.donuts)
    );
  }
}
