import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsService } from '../services/trips';
import { Trip } from '../models/trip';
import { TripCard } from '../trip-card/trip-card';
import { TripForm } from '../trip-form';

@Component({
  selector: 'trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard, TripForm],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListing {
  trips!: ReturnType<TripsService['getTrips']>;
  selectedTrip = signal<Trip | null>(null);
  toast = signal<string | null>(null);

  constructor(private svc: TripsService) {
    this.trips = this.svc.getTrips();
  }

  onEdit(t: Trip) {
    this.selectedTrip.set(t);
    this.toast.set(null);
  }

  onSave(updated: Trip) {
    this.svc.updateTrip(updated);
    this.selectedTrip.set(null);
    this.toast.set('Trip updated successfully.');
    setTimeout(() => this.toast.set(null), 2000);
  }

  onCancel() {
    this.selectedTrip.set(null);
  }
}

