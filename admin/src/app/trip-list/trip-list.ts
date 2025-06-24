import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../trip';
import { TripsService } from '../trips.service';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-list.html'
})
export class TripList {
  trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.tripsService.getTrips().subscribe({
      next: (data) => this.trips = data,
      error: (err) => console.error('Error fetching trips:', err)
    });
  }
}


