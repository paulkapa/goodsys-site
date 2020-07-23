var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projects.js');
/* GET projects pages. */
router.get('/en/projects', projectsController.getProjectsEN);
router.get('/ro/projects', projectsController.getProjectsRO);

module.exports = router;
