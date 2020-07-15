var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
/* GET home page. */
router.get('goodsys.azurewebsites.net/', indexController.getIndex);
router.get('goodsys.azurewebsites.net/en', indexController.getIndexEN);
router.get('goodsys.azurewebsites.net/ro', indexController.getIndexRO);

module.exports = router;
