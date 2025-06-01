const tripModel = require('../models/tripData');

module.exports.index = function (req, res) {
    res.render('traveler/index', {
        title: 'Travlr Getaways',
        tagline: 'Adventure Awaits!'
    });
};

module.exports.tripList = function (req, res) {
    const trips = tripModel.getTrips();
    res.render('trips', { title: 'Available Trips', trips });
};
