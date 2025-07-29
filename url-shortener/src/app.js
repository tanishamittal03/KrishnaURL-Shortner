require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./database/db');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const authRoutes = require('./routes/auth');
const urlRoutes = require('./routes/url');
const analyticsRoutes = require('./routes/analytics');
app.use('/auth', authRoutes);
app.use('/url', urlRoutes);
app.use('/analytics', analyticsRoutes);

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// Redirect short URL
app.get('/:shortId', require('./controllers/urlController').redirectUrl);

// Start server after DB is ready
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
