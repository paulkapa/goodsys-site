var express = require('express');
var router = express.Router();
var outsourcingController = require('../controllers/outsourcing.js');
/* GET outsourcing pages. */
router.get('/en/outsourcing', outsourcingController.getOutsourcingEN);
router.get('/ro/outsourcing', outsourcingController.getOutsourcingRO);

module.exports = router;
