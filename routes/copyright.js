var express = require('express');
var router = express.Router();
var copyrightController = require('../controllers/copyright.js');
/* GET copyright page. */
router.get('goodsys.azurewebsites.net/en/copyright', copyrightController.getCopyrightEN);
router.get('goodsys.azurewebsites.net/ro/copyright', copyrightController.getCopyrightRO);

module.exports = router;
