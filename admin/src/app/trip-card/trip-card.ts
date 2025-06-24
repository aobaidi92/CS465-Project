import { Component, Input } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.html',
  standalone: true,
  imports: []
})
export class TripCardComponent {
  @Input() trip!: Trip;
}
