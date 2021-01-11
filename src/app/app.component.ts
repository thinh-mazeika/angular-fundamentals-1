import { Component } from '@angular/core';
import data from './data/donuts.json';
import { environment } from '../environments/environment';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  // todo: inject the DonutService and invoke the populate() method
  constructor(private donutService: DonutService) {
    this.donutService.populate();
  }
}
