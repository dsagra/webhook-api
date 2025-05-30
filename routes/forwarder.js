const express = require('express');
const router = express.Router();
const axios = require('axios');

// POST /forward
router.post('/', async (req, res) => {
  const { url, data } = req.body;

  if (!url || typeof data !== 'object') {
    return res.status(400).json({ error: 'Missing or invalid parameters' });
  }

  try {
    const response = await axios.post(url, data);
    return res.status(200).json({
      message: 'Data forwarded successfully',
      targetResponse: response.data,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Error forwarding data',
      details: error.message,
    });
  }
});

module.exports = router;
