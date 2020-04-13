var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

router.get('/', symposiaCtrl.index);

module.exports = router;
