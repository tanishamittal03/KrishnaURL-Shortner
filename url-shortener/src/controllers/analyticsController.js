const { findUrlByShortId, getAnalytics } = require('../models/url');

exports.getAnalytics = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await findUrlByShortId(shortId);
    if (!url) return res.status(404).json({ error: 'URL not found' });
    const analytics = await getAnalytics(url.id);
    res.json({ clicks: url.clicks, analytics });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
