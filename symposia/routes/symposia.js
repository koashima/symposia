var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposias');

router.get('/', symposiaCtrl.index);
router.get('/new', symposiaCtrl.new);
router.post('/chronicle/', symposiaCtrl.create);
router.get('/chronicle', symposiaCtrl.chronicle);


module.exports = router;