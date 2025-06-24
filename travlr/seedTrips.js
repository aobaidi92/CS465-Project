const mongoose = require('mongoose');
const fs = require('fs');
require(__dirname + '/app_api/models/trips');

const Trip = mongoose.model('Trip');
const dbURI = 'mongodb://localhost:27017/travlr';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', async () => {
  console.log('Connected to MongoDB');

  try {
    await Trip.deleteMany({});
    const data = JSON.parse(fs.readFileSync('./trips.json'));
    await Trip.insertMany(data);
    console.log('Trips seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Error seeding trips:', err);
    process.exit(1);
  }
});
