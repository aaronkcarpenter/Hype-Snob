const express = require('express');
const router = express.Router();
const { User } = require('../../db/models')
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
const cookieParser = require('cookie-parser');
const { asyncHandler } = require('../../utils');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { getUserToken, requireAuth } = require('./security-utils');

router.use(requireAuth);
router.use(cookieParser());

router.post('/', asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const session = Math.random()
  const user = await User.create({
    name: name,
    email: email,
    password: password,
    salt: salt,
    session_token: session,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const token = getUserToken(user);
  const id = user.id;
  res.json({ token, user: { id: id } });
}
))

module.exports = router;