const express = require('express');
const morgan = require('morgan');
const { environment } = require('./config');
const cors = require('cors');
const bodyParser = require("body-parser");

const home = require('./routes/index');
const login = require('./routes/login');
const shop = require('./routes/shop');
const signUp = require('./routes/signUp');
const style = require('./routes/styles');
const wantList = require('./routes/wantList');

const app = express();
app.use(cors({ origin: true }));

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(home);
app.use(login);
app.use(shop);
app.use(signUp);
app.use(style);
app.use(wantList);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;