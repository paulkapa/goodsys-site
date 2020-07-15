var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
/* GET home page. */
router.get('/', indexController.getIndexRO);
router.get('/en', indexController.getIndexEN);
router.get('/ro', indexController.getIndexRO);

module.exports = router;
