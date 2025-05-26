const home = (req, res) => {
    res.render('traveler/index', {
  header: {
    siteName: 'Travlr',
    tagline: 'Adventure awaits'
  },
        title: 'Travlr Getaways',
        message: 'Welcome to Travlr!'
    });
};

module.exports = {
    home
};
