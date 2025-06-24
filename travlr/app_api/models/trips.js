const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: String,
  length: String,
  start: String,
  resort: String,
  perPerson: Number,
  image: String,
  description: String
});

mongoose.model('Trip', tripSchema);
