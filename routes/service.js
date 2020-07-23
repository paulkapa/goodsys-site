var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/service.js');
/* GET service pages. */
router.get('/en/maintenance/service', serviceController.getServiceEN);
router.get('/ro/maintenance/service', serviceController.getServiceRO);

module.exports = router;
