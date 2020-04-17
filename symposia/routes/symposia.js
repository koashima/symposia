var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposias');

const isAuth = (req, res, next) => { 
    req.isAuthenticated() ? next() : res.redirect('/auth/google');    
};

router.get('/', symposiaCtrl.index);
<<<<<<< HEAD
router.get('/new', symposiaCtrl.new);
router.post('/chronicle/', symposiaCtrl.create);
router.get('/chronicle', symposiaCtrl.chronicle);

=======
router.get('/new', isAuth, symposiaCtrl.new);
router.get('/chronicle', isAuth, symposiaCtrl.chronicle);
router.post('/chronicle', symposiaCtrl.create);
>>>>>>> 6d0b9536b13f069fd23a1a28d5d409da815c6ef7

module.exports = router;