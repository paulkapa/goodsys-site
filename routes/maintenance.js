var express = require('express');
var router = express.Router();
var maintenanceController = require('../controllers/maintenance.js');
/* GET maintenance page. */
router.get('goodsys.azurewebsites.net/en/maintenance', maintenanceController.getMaintenanceEN);
router.get('goodsys.azurewebsites.net/ro/maintenance', maintenanceController.getMaintenanceRO);

module.exports = router;
