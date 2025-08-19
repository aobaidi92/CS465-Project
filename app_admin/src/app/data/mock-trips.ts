import { Trip } from '../models/trip';

export const TRIPS: Trip[] = [
  {
    _id: 't1',
    name: "Gale Reef",
    resort: "Emerald Bay, 3 stars",
    image: "reef1.jpg",
    length: 4,
    price: 799,
    spaces: 10,
    start: "2025-12-15",
    description: "Gale Reef Sed et augue lorem. Nunc sit amet placerat arcu. Mauris volutpat ipsum a."
  },
  {
    _id: 't2',
    name: "Dawson's Reef",
    resort: "Blue Lagoon, 4 stars",
    image: "reef2.jpg",
    length: 5,
    price: 1199,
    spaces: 8,
    start: "2025-11-05",
    description: "Dawson's Reef Integer magna leo, posuere et dignissim vitae, porttitor at odio."
  },
  {
    _id: 't3',
    name: "Claire's Reef",
    resort: "Coral Sands, 5 stars",
    image: "reef3.jpg",
    length: 5,
    price: 1999,
    spaces: 6,
    start: "2026-01-10",
    description: "Claire's Reef Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auc."
  }
];
