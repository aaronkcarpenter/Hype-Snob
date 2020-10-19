const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../utils');
const db = require('../../db/models');
const { getUserToken, requireAuth } = require('../../auth');

const router = express.Router();


//Validating New and Current Users
const validateEmailAndPassword = [
  check("email")
    .exists({
      checkFalsy: true
    })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please provide a password."),
];

const validateCreateUser = [
  // validateUsername,
  ...validateEmailAndPassword,
  handleValidationErrors
]

//Sign Up for Site
router.post(
  "/",
  validateCreateUser,
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const isEmail = await db.User.findOne({ where: { email: email } });
    const isUsername = await db.User.findOne({ where: { username: username } });
    console.log(
      { email, password },
      hashedPassword
    );

    if (isEmail === null && isUsername === null) {
      console.log("This is isEmail: ", isEmail, "This is isUsername: ", isUsername)
      const user = await db.User.create({
        email,
        hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log("USER POSTED");
      const token = getUserToken(user);

      res.status(201).json({ user: { id: user.id }, token });
    }
    const err = new Error("SignUp failed");
    err.status = 401;
    err.title = "SignUp failed";
    err.errors = ["The provided credentials were invalid."];
    return next(err);

  })
);


router.get('/', asyncHandler(async (req, res) => {
  res.send('User Route');
}));


module.exports = router;