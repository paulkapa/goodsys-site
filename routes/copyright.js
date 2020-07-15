var express = require('express');
var router = express.Router();
var copyrightController = require('../controllers/copyright.js');
/* GET copyright page. */
router.get('/en/copyright', copyrightController.getCopyrightEN);
router.get('/ro/copyright', copyrightController.getCopyrightRO);

module.exports = router;
