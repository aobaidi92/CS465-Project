import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripsService } from '../trips.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-form.html',
})
export class TripFormComponent {
  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  constructor(private tripService: TripsService) {}

  submitTrip() {
    this.tripService.addTrip(this.newTrip).subscribe({
      next: () => {
        alert('Trip added!');
        this.newTrip = {
          code: '',
          name: '',
          length: '',
          start: '',
          resort: '',
          perPerson: 0,
          image: '',
          description: ''
        };
      },
      error: (err) => {
        console.error('Trip submission failed:', err);
        alert('Failed to add trip.');
      }
    });
  }
}
