const {
  createUrl,
  findUrlByShortId,
  incrementClicks,
  addAnalytics,
  getUserUrls
} = require('../models/url');
const shortid = require('shortid');

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortId = 'krishna' + shortid.generate().replace(/[^a-zA-Z0-9]/g, '').slice(0, 6);
    const url = await createUrl(originalUrl, shortId, req.user.userId);
    res.status(201).json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await findUrlByShortId(shortId);
    if (!url) return res.status(404).send('URL not found');
    await incrementClicks(url.id);
    await addAnalytics(url.id, req.get('referer'), req.ip);
    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(400).send('Error redirecting');
  }
};

exports.getUserUrls = async (req, res) => {
  try {
    const urls = await getUserUrls(req.user.userId);
    res.render('dashboard', { urls });
  } catch (err) {
    res.status(400).send('Error fetching URLs');
  }
};
