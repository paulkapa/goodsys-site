var express = require('express');
var router = express.Router();
var copyrightController = require('../controllers/copyright.js');
/* GET home page. */
router.get('/', copyrightController.getCopyright);
router.get('/en', copyrightController.getCopyrightEN);
router.get('/ro', copyrightController.getCopyrightRO);

module.exports = router;
