const express = require('express');
const path = require('path');

// Connect to MongoDB
require('./app_api/db');

// Register Mongoose model before using
require('./app_api/models/trips');

const app = express();


// Configure Handlebars View Engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Input Data Handling
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));

// Routes
const travelerRouter = require('./app_server/routes/traveler');
app.use('/traveler', travelerRouter);

// API Routes
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
