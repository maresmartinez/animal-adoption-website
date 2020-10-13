const { Router } = require('express');
const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_API_SECRET } = require('../config');

const router = Router();

// TODO: This should be a private route
router.get('/upload', (req, res) => {
  try {
    const timestamp = Math.round((new Date).getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request({ timestamp }, CLOUDINARY_API_SECRET);
    res.status(200).json({ timestamp, signature });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;