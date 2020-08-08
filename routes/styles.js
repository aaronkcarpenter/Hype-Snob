const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/styles', asyncHandler(async (req, res) => {
  // res.send('Styles Page');
  res.render('/styles');
}));

module.exports = router;