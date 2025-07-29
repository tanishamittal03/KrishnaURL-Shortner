const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render register page
router.get('/register', (req, res) => {
  res.render('register');
});

// Render login page
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
