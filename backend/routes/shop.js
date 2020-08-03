const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/shop', asyncHandler(async (req, res) => {
  res.send('Shopping Page');
}));

module.exports = router;