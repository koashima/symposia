var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

const isAuth = (req, res, next) => { 
    req.isAuthenticated() ? next() : res.redirect('/auth/google');    
};

router.get('/', symposiaCtrl.index);
router.get('/new', isAuth, symposiaCtrl.new);
router.get('/chronicle', isAuth, symposiaCtrl.chronicle);
router.post('/chronicle', symposiaCtrl.create);

module.exports = router;