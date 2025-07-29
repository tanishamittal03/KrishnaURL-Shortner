const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = process.env.SQLITE_DB || path.join(__dirname, '../../data/urlshortener.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to SQLite database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

module.exports = db;
