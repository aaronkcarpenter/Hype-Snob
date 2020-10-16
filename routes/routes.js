const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/signup', (req, res) => {
  // res.send('Sign Up Page');
  res.render('/signup');
});

router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.get('/shop', (req, res) => {
  res.send('Login Page');
});

router.get('/styles', (req, res) => {
  res.send('Styles Page');
});

router.get('/wantlist', (req, res) => {
  res.send('Wantlist Page');
});


module.exports = router;