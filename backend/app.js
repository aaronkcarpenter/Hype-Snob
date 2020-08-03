#! /usr/bin/env node

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const fetch = require('node-fetch');
const session = require('express-session');
const cors = require('cors');
const createErrors = require('http-errors');
const helmet = require('helmet');

const login = require('./routes/login');
const shop = require('./routes/shop');
const signUp = require('./routes/signUp');
const style = require('./routes/styles');
const wantList = require('./routes/wantList');

const app = express();

const csrfProtection = csrf({ cookie: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());

app.use(login);
app.use(shop);
app.use(signUp);
app.use(style);
app.use(wantList);

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});



const port = 8080;
app.listen(port, () => console.log(`Currently listening on port ${port}...`));