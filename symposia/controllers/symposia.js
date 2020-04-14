const Symposia = require('../models/symposia');
const Contributor = require('../models/contributor');

const index = (req, res, next) => {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Contributor.find(modelQuery)
    .sort(sortKey).exec((err, contributors) => {
        if(err) return next(err);
        res.render('symposia/index', {
            contributors,
            user: req.user,
            name: req.query.name,
            sortKey,
        });
    });
};


module.exports = {
  index,
};