const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
require('./app_api/models/db');

// Routes
const routesApi = require('./app_api/routes/index');

const app = express();

// Enable CORS
app.use(cors());

// Logger and parsers
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Optional favicon (commented out if file is missing)
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', routesApi);

// Catch-all error handler (optional)
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server if called directly (optional)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;
