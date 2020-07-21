var express = require('express');
var router = express.Router();
var subscriptionsController = require('../controllers/subscriptions.js');
/* GET subscriptions pages. */
router.get('/en/subscriptions', subscriptionsController.getSubscriptionsEN);
router.get('/ro/subscriptions', subscriptionsController.getSubscriptionsRO);
router.get('/en/subscriptions/it-premium', subscriptionsController.getITPremiumEN);
router.get('/ro/subscriptions/it-premium', subscriptionsController.getITPremiumRO);

module.exports = router;
