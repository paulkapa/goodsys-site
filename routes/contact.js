var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact.js');
/* GET home page. */
router.get('/contact', contactController.getContact);
router.get('/en/contact', contactController.getContactEN);
router.get('/ro/contact', contactController.getContactRO);

module.exports = router;
