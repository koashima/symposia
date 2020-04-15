const Symposium = require('../models/symposium');
const Contributor = require('../models/contributor');

const index = (req, res, next) => {
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // let sortKey = req.query.sort || 'name';
    Contributor.findById(req.user)
    // .sort(sortKey).exec((err, contributors) => {
        // if(err) return next(err);
        res.render('symposia/index', {
            // contributors,
            user: req.user,
            name: req.query.name,
            // sortKey,
        });
    // });
};

const show = (req, res) => { 
    Symposium.findById(req.params.id)
}

const newSymposium = (req, res) => { 

}

const create = (req, res) => { 

}


module.exports = {
  index,
  show, 
  new: newSymposium, 
  create
};