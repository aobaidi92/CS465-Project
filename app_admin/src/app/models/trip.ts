export interface Trip {
  _id: string;
  name: string;
  resort: string;
  image: string;
  length: number;
  price: number;
  spaces: number;
  start: string; // ISO date string
  description: string;
}
