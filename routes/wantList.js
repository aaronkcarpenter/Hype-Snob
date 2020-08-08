const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/wantlist', asyncHandler(async (req, res) => {
  // res.send('Wantlist Page');
  res.render('/wantlist');
}));

module.exports = router;