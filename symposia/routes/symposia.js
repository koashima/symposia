var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

router.get('/', symposiaCtrl.index);
router.get('/new', symposiaCtrl.new);
router.get('/:id', (req, res) => {res.send(`this is chronicle ${req.user.name}`)});
router.post('/', symposiaCtrl.create);

module.exports = router;
