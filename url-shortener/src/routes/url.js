const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
const auth = require('../middleware/auth');

router.post('/shorten', auth, urlController.createShortUrl);
router.get('/dashboard', auth, urlController.getUserUrls);

module.exports = router;
