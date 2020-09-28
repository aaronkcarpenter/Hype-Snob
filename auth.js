const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;
const { User, Follow } = require("./db/models");

const generateUserToken = (user) => {
  //DOES WHAT: generates a token for a user
  //WHEN TO RUN: run it during account creation, login, or token refreshing.
  //WHERE TO RUN IT: this should be ran in the signup and login routes. it can also be ran in a refresh middleware function.
  const userDataForToken = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign({ data: userDataForToken }, secret, {
    expiresIn: parseInt(expiresIn, 10),
  });

  return token;
};

const requireAuth = (req, res, next) => {
  //DOES WHAT: this function checks to see if a user has is logged in (has a token). If yes, it will pass on their user instance to req. If not, it will direct the user to login.
  //WHEN TO RUN: When it is necessary to have an authenticated, logged in user for a request.
  //WHERE TO RUN IT: this is a middleware. run it before route.

  const token = req.token;

  if (!token) {
    //TODO this should be redirect or prompt modal popup for login
    const error = new Error("You must be logged in to see this page");
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id, email } = jwtPayload.data;

    try {
      req.user = await User.findByPk(id);
    } catch (err) {
      return next(err);
    }

    if (!req.user) {
      const error = new Error("You must be logged in to see this page");
      res.status(401);
      res.json({ message: "Invalid Token" });
      return;
    }
    return next();
  });
};

const loggedInUser = (req, res, next) => {
  //DOES WHAT: this middleware checks if the user is logged in (has valid token). If they are, their instance is grabbed and passed in the req.
  //WHEN TO RUN: this middleware should be ran when we want to determine how to render a frontend page from a get request. We check who is logged in, and if it matches the id of
  // the get path for user or user songs we render it with extra stuff.           For example, if a user visits a profile page or
  //a user's songs page, we would run this and see if the person is logged in and the owner. if yes, we'd add links to edit account, or edit/add songs page(s).
  //WHERE TO RUN IT: it's a middleware, run before rendering pug to see if we need to render certain options/links for user.
  const { token } = req;

  // console.log('token', typeof token)
  if (token === 'null') {
    req.user = null;
    next();
    return;
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 405;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      const user = await User.findByPk(id, { include: { model: Follow } });
      if (user !== null) {
        req.user = user;
      }
    } catch (err) {
      return next(err);
    }

    next();
  });
};

module.exports = {
  generateUserToken,
  requireAuth,
  loggedInUser,
};