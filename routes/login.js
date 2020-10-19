const express = require('express');

const router = express.Router();
// const { User } = require('../../db/models');
// const cookieParser = require('cookie-parser');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// router.use(requireAuth);
// router.use(cookieParser());

router.get('/login', asyncHandler(async (req, res) => {
  // res.send('Login Page');
  res.render('/login');
}));

// router.post('/', asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({
//     where: {
//       email: email,
//       password: password
//     },
//   });

//   if (!user) {
//     const err = new Error("Sign in failed");
//     err.status = 401;
//     err.title = "Sign in failed";
//     err.errors = ["The provided credentials were invalid."];
//     res.status(400).json({ err });
//   } else {
//     const token = getUserToken(user);
//     const id = user.id;
//     res.json({ token, user: { id } });
//   }

// }));

module.exports = router;

//Go to Users for actual code. This is not being used.