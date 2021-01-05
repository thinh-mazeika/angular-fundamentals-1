import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: ` <p>Donut name: {{ donut.name }}.Icing?: {{ icing }}</p> `,
})
export class DonutComponent {
  @Input() donut: Donut;
  icing = true;
}
