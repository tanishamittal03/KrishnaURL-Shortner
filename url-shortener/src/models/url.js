const db = require('../database/db');

// Create urls table if not exists
db.run(`CREATE TABLE IF NOT EXISTS urls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  originalUrl TEXT NOT NULL,
  shortId TEXT UNIQUE NOT NULL,
  userId INTEGER,
  clicks INTEGER DEFAULT 0,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Create analytics table if not exists
db.run(`CREATE TABLE IF NOT EXISTS analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  urlId INTEGER,
  referrer TEXT,
  ip TEXT,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(urlId) REFERENCES urls(id)
)`);

const createUrl = (originalUrl, shortId, userId) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO urls (originalUrl, shortId, userId) VALUES (?, ?, ?)', [originalUrl, shortId, userId], function(err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, originalUrl, shortId, userId });
    });
  });
};

const findUrlByShortId = (shortId) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM urls WHERE shortId = ?', [shortId], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const incrementClicks = (urlId) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE urls SET clicks = clicks + 1 WHERE id = ?', [urlId], function(err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

const addAnalytics = (urlId, referrer, ip) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO analytics (urlId, referrer, ip) VALUES (?, ?, ?)', [urlId, referrer, ip], function(err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

const getUserUrls = (userId) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM urls WHERE userId = ?', [userId], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

const getAnalytics = (urlId) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM analytics WHERE urlId = ?', [urlId], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

module.exports = {
  createUrl,
  findUrlByShortId,
  incrementClicks,
  addAnalytics,
  getUserUrls,
  getAnalytics
};
