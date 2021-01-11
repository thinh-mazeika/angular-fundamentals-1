import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.interface';
import { environment } from '../../environments/environment';
import data from '../data/donuts.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  // todo: inject the HttpClient instance
  constructor(private http: HttpClient) {}

  getAll(): Observable<Donut[]> {
    // todo: refactor to use the HttpClient.get() method
    // return JSON.parse(window.localStorage.getItem(environment.storage.donuts));
    return this.http.get<Donut[]>('http://localhost:3000/donuts');
  }

  // todo: remove
  populate(): void {
    const value = window.localStorage.getItem(environment.storage.donuts);
    if (!value) {
      window.localStorage.setItem(
        environment.storage.donuts,
        JSON.stringify(data)
      );
    }
  }

  save(donut: Donut): void {
    this.http
      .put(`http://localhost:3000/donuts/${donut.id}`, donut)
      .subscribe();
  }
}
