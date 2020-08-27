const express = require('express');
const router = express.Router();
const db = require("../db/models");
const Op = require('sequelize').Op;

const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('./utils');
const { requireAuth } = require('../authorization');

router.get('/shop', asyncHandler(async (req, res) => {
  // res.send('Shopping Page');
  res.render('/shop');
}));

// router.get("/shop", asyncHandler(async (req, res) => {
//   const sneakers = await db.Sneaker.findAll({
//     include: [db.Brand, db.SneakerType]
//   });
//   res.json({ sneakers })
// }));


module.exports = router;