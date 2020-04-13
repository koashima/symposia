const Symposia = require('../models/symposia');

const index = (req, res) => {
  res.render('symposia/index');
};

module.exports = {
  index,
};
