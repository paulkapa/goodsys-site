var express = require('express');
var router = express.Router();
var copyrightController = require('../controllers/copyright.js');
/* GET home page. */
router.get('/copyright', copyrightController.getCopyright);
router.get('/en/copyright', copyrightController.getCopyrightEN);
router.get('/ro/copyright', copyrightController.getCopyrightRO);

module.exports = router;
