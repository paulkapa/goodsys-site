var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact.js');
/* GET contact page. */
router.get('../en/contact', contactController.getContactEN);
router.get('../ro/contact', contactController.getContactRO);

module.exports = router;
