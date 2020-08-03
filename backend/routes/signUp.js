const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);


router.get('/signup', asyncHandler(async (req, res) => {
  res.send('Sign Up Page');
}));

module.exports = router;