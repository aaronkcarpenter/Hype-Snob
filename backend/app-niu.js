// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const csrf = require('csurf');
// const fetch = require('node-fetch');
// const session = require('express-session');
// const cors = require('cors');
// const createErrors = require('http-errors');
// const helmet = require('helmet');

// const login = require('./routes/login');
// const shop = require('./routes/shop');
// const signUp = require('./routes/signUp');
// const style = require('./routes/styles');
// const wantList = require('./routes/wantList');

// const app = express();

// const csrfProtection = csrf({ cookie: true });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: true }));
// app.use(helmet({ hsts: false }));
// app.use(cookieParser());
// app.use(express.urlencoded());
// app.use(express.json());

// // Routes
// app.use(login);
// app.use(shop);
// app.use(signUp);
// app.use(style);
// app.use(wantList);


// // Catch unhandled requests and forward to error handler.
// app.use((req, res, next) => {
//   const err = new Error("The requested resource couldn't be found.");
//   err.status = 404;
//   next(err);
// });

// // Generic error handler.
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   const isProduction = environment === "production";
//   res.json({
//     title: err.title || "Server Error",
//     message: err.message,
//     errors: err.errors,
//     stack: isProduction ? null : err.stack,
//   });
// });



// const port = 8080;
// app.listen(port, () => console.log(`Currently listening on port ${port}...`));

// module.exports = app;