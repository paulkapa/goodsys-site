var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact.js');
/* GET contact page. */
router.get('goodsys.azurewebsites.net/en/contact', contactController.getContactEN);
router.get('goodsys.azurewebsites.net/ro/contact', contactController.getContactRO);

module.exports = router;
