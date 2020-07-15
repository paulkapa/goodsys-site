var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/en', indexController.getIndexEN);
router.get('/ro', indexController.getIndexRO);

module.exports = router;
