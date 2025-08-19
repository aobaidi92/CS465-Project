import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from './models/trip';

@Component({
  selector: 'trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="card mt-3" *ngIf="model">
    <div class="card-header">Edit Trip: {{ model.name }}</div>
    <div class="card-body">
      <form (ngSubmit)="handleSubmit()">
        <div class="mb-2">
          <label class="form-label">Name</label>
          <input class="form-control" [(ngModel)]="model.name" name="name" required>
        </div>

        <div class="mb-2">
          <label class="form-label">Resort</label>
          <input class="form-control" [(ngModel)]="model.resort" name="resort" required>
        </div>

        <div class="mb-2">
          <label class="form-label">Image filename</label>
          <input class="form-control" [(ngModel)]="model.image" name="image">
        </div>

        <div class="mb-2">
          <label class="form-label">Length (nights)</label>
          <input type="number" class="form-control" [(ngModel)]="model.length" name="length" min="1" required>
        </div>

        <div class="mb-2">
          <label class="form-label">Price</label>
          <input type="number" class="form-control" [(ngModel)]="model.price" name="price" min="0" required>
        </div>

        <div class="mb-2">
          <label class="form-label">Spaces</label>
          <input type="number" class="form-control" [(ngModel)]="model.spaces" name="spaces" min="0" required>
        </div>

        <div class="mb-2">
          <label class="form-label">Start Date</label>
          <input type="date" class="form-control" [(ngModel)]="model.start" name="start">
        </div>

        <div class="mb-2">
          <label class="form-label">Description</label>
          <textarea class="form-control" [(ngModel)]="model.description" name="description" rows="3"></textarea>
        </div>

        <div class="mt-3 d-flex gap-2">
          <button type="submit" class="btn btn-success btn-sm">Save</button>
          <button type="button" class="btn btn-secondary btn-sm" (click)="cancel.emit()">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  `
})
export class TripForm implements OnChanges {
  @Input() trip!: Trip | null;
  @Output() save = new EventEmitter<Trip>();
  @Output() cancel = new EventEmitter<void>();

  model: Trip | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trip']) {
      this.model = this.trip ? { ...this.trip } : null;
    }
  }

  handleSubmit() {
    if (this.model) this.save.emit(this.model);
  }
}
