const { User } = require('.db/models');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;
const bearerToken = require('express-bearer-token');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  }
}

const restoreUser = async (req, res, next) => {
  console.log(req.session)
  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

const logoutUser = (req, res) => {
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/login-page');
  }
  return next();
}

const requireAuth = [bearerToken(), restoreUser];
module.exports = {
  loginUser,
  restoreUser,
  logoutUser,
  requireAuth
};