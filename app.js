const express = require('express');
const path = require('path');
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));

// Routes
const travelerRouter = require('./app_server/routes/traveler');
app.use('/traveler', travelerRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
