const express = require('express');
const router = express.Router();
const ctrlTraveler = require('../controllers/traveler');

router.get('/', ctrlTraveler.home);

module.exports = router;
