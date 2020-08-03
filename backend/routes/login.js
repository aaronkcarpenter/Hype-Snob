const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/login', asyncHandler(async (req, res) => {
  res.send('Login Page');
}));

module.exports = router;