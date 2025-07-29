const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/:shortId', analyticsController.getAnalytics);

module.exports = router;
