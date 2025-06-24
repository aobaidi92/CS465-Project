const path = require('path');
const fs = require('fs');

module.exports.getTrips = function () {
    const filePath = path.join(__dirname, 'trips.json');
    const file = fs.readFileSync(filePath);
    return JSON.parse(file);
};

