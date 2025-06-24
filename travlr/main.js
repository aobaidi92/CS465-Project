const express = require('express');
const hbs = require('hbs');
const path = require('path');
const travelerRouter = require('./app_server/routes/index');

const app = express();

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register the partials folder (should be 'partials', not 'layouts')
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', travelerRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
