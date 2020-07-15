var express = require('express');
var router = express.Router();
var maintenanceController = require('../controllers/maintenance.js');
/* GET home page. */
router.get('/', maintenanceController.getMaintenance);
router.get('/en', maintenanceController.getMaintenanceEN);
router.get('/ro', maintenanceController.getMaintenanceRO);

module.exports = router;
