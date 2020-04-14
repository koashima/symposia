var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

router.get('/', symposiaCtrl.index);

// router.get('/profile', () => {res.send('this is the profile page')})

module.exports = router;
