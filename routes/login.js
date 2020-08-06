const express = require('express');

const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/login', asyncHandler(async (req, res) => {
  // res.send('Login Page');
  res.render('/')
}));

module.exports = router;

//Go to Users for actual code. This is not being used.