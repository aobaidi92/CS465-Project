import { Injectable, signal } from '@angular/core';
import { Trip } from '../models/trip';
import { TRIPS } from '../data/mock-trips';

@Injectable({ providedIn: 'root' })
export class TripsService {
  private _trips = signal<Trip[]>([...TRIPS]);

  getTrips() {
    return this._trips.asReadonly();
  }

  updateTrip(updated: Trip) {
    const arr = this._trips();
    const idx = arr.findIndex(t => t._id === updated._id);
    if (idx !== -1) {
      const next = [...arr];
      next[idx] = { ...updated };
      this._trips.set(next);
    }
  }
}
