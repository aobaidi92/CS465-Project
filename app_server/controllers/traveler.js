module.exports.index = function(req, res) {
  res.render('traveler/index', {
    title: 'Travlr Getaways',
    tagline: 'Adventure Awaits!'
  });
};
