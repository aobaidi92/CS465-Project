const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/traveler');

router.get('/', ctrlTravel.index);
router.get('/trips', ctrlTravel.tripList);

module.exports = router;
