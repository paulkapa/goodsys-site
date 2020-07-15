var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact.js');
/* GET home page. */
router.get('/', contactController.getContact);
router.get('/en', contactController.getContactEN);
router.get('/ro', contactController.getContactRO);

module.exports = router;
