var express = require('express');
var router = express.Router();
var maintenanceController = require('../controllers/maintenance.js');
/* GET home page. */
router.get('/maintenance', maintenanceController.getMaintenance);
router.get('/en/maintenance', maintenanceController.getMaintenanceEN);
router.get('/ro/maintenance', maintenanceController.getMaintenanceRO);

module.exports = router;
